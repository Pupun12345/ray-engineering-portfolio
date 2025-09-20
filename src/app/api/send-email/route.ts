import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // ✅ Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // ✅ Nodemailer transporter (using your MAIL_USER / MAIL_PASS)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ------------------------------
    // 1️⃣ HTML Template for User
    // ------------------------------
    const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        .container { max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
        .header { background: #004080; color: #fff; padding: 20px; text-align: center; }
        .header h1 { font-size: 20px; margin: 0; }
        .content { padding: 20px; }
        .content h2 { color: #004080; }
        .content p { font-size: 14px; line-height: 1.6; }
        .footer { background: #f4f4f4; text-align: center; padding: 15px; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Ray Engineering</h1>
        </div>
        <div class="content">
          <h2>Hey ${name},</h2>
          <p>Thanks so much for contacting us at <strong>Ray Engineering</strong>! 
          We’re excited to have you on board, and we think you’ll really love what we do.</p>
          <p><strong>Your message:</strong></p>
          <blockquote>${message}</blockquote>
          <p>If you have any questions, you can always reach us at 
          <a href="mailto:support@rayengineering.com">support@rayengineering.com</a>.</p>
          <p>Thanks again and happy to have you!</p>
          <p><strong>Best,<br/>The Ray Engineering Team</strong></p>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Ray Engineering Group LLC. All rights reserved.
        </div>
      </div>
    </body>
    </html>
    `;

    // ------------------------------
    // 2️⃣ Admin Notification Email
    // ------------------------------
    const adminHtml = `
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "(No subject)"}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${message}</blockquote>
    `;

    // ✅ Send Admin Mail
    await transporter.sendMail({
      from: `"Ray Engineering" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: subject || "New Contact Form Submission",
      html: adminHtml,
    });

    // ✅ Send User Acknowledgement Mail
    await transporter.sendMail({
      from: `"Ray Engineering" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "✅ We received your message – Ray Engineering",
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send emails." },
      { status: 500 }
    );
  }
}
