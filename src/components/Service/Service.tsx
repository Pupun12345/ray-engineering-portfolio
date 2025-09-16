"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";

const services = [
  { img: "/img/service-1.jpg", title: "Building Construction" },
  { img: "/img/service-2.jpg", title: "House Renovation" },
  { img: "/img/service-3.jpg", title: "Architecture Design" },
  // { img: "/img/service-4.jpg", title: "Interior Design" },
  // { img: "/img/service-5.jpg", title: "Fixing & Support" },
  // { img: "/img/service-5.jpg", title: "Painting" },
];

const questions = [
  "Lorem ipsum dolor sit amet?",
  "Curabitur facilisis ornare velit?",
  "Aliquam metus tortor auctor id?",
  "Viverra quis sem sed aliquet?",
  "Phasellus nec pretium mi viverra?",
  "Praesent non felis at mauris?",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Services</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/services">Our Services</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <div className="service">
        <Container>
          <div className="section-header text-center">
            <p>Our Services</p>
            <h2>We Provide Services</h2>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <div className="service-item">
                  <div className="service-img">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                    <div className="service-overlay">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec pretium mi. Curabitur facilisis ornare
                        velit non vulputate. Aliquam metus tortor, auctor id
                        gravida condimentum, viverra quis sem.
                      </p>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3>{service.title}</h3>
                    <Link className="btn" href={service.img}>
                      +
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      {/* <div className="faq">
        <Container>
          <div className="section-header text-center">
            <p>Frequently Asked Question</p>
            <h2>You May Ask</h2>
          </div>
          <Row>
            <Col lg={6}>
              <Accordion>
                {questions.slice(0, 3).map((q, i) => (
                  <Accordion.Item eventKey={String(i)} key={i}>
                    <Accordion.Header>{q}</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
            <Col lg={6}>
              <Accordion>
                {questions.slice(3, 6).map((q, i) => (
                  <Accordion.Item eventKey={String(i)} key={i}>
                    <Accordion.Header>{q}</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}
