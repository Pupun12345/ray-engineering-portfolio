"use client";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function ContactComponent() {
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
                <Form id="contactForm">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      required
                      className="form-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Message"
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
}
