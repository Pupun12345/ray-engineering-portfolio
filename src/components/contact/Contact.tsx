"use client";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
=======
import { useEffect } from "react";
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function ContactComponent() {
<<<<<<< HEAD
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");


  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const form = useRef<HTMLFormElement>(null);
  console.log(form)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
if (!form.current) return;
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setSuccess("Message Sent to Our Team , we will connect with you verySoon ...");
        },
        (error) => {
          console.log(error);
          setSuccess("FAILED...");
        }
      );
  };

=======
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Contact Us</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/contact">Contact Us</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="contact py-5">
        <Container>
          <div className="section-header text-center" data-aos="fade-up">
            <p>Get In Touch</p>
            <h2>For Any Query</h2>
          </div>

          <Row>
            {/* Contact Info */}
            <Col md={6} data-aos="fade-right">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h2>Location</h2>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <h2>Phone</h2>
                    <p>+012 345 67890</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h2>Email</h2>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col md={6} data-aos="fade-left">
              <div className="contact-form">
<<<<<<< HEAD
                <p className="text-orange text-center mb-2">{success}</p>
                <Form id="contactForm" onSubmit={sendEmail} ref={form}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleName}
=======
                <Form id="contactForm">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
<<<<<<< HEAD
                      name="from_email"
                      value={email}
                      onChange={handleEmail}
=======
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
<<<<<<< HEAD
                      name="subject"
                      value={subject}
                      onChange={handleSubject}
=======
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Message"
<<<<<<< HEAD
                      name="message"
                      value={message}
                      onChange={handleMessage}
=======
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-send w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 946051078771ed22a9ea7f335495e171744d2270
