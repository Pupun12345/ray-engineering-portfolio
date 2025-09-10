import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 1️⃣ Email to Admin (Ray Engineering)
    const adminMailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: subject || "New Contact Form Submission",
      text: `
        📩 New Contact Request

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // 2️⃣ Acknowledgement Email to Sender
    const userMailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "We received your request – Ray Engineering",
      text: `
        Hi ${name},

        Thank you for contacting Ray Engineering. 
        We’ve received your request and our team will connect with you very soon.

        Here’s a copy of your message:
        ----------------------------
        Subject: ${subject}
        Message: ${message}
        ----------------------------

        Regards,  
        Ray Engineering Team
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send emails." },
      { status: 500 }
    );
  }
}
