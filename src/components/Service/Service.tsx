"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";

const services = [
  { 
    img: "/img/service-3.jpg", 
    title: "Scaffolding Services",
    desc: "Expert supply, installation, and hire of scaffolding for industrial, commercial, and residential projects, including complex and high-risk access solutions."
  },
  { 
    img: "/img/service-2.jpg", 
    title: "Mechanical Services",
    desc: "Comprehensive mechanical contracting, maintenance, and erection services, executed with precision and safety by a skilled team."
  },
  { 
    img: "/img/service-1.jpg", 
    title: "Waterproofing Services",
    desc: " Advanced waterproofing solutions for diverse structures, ensuring long-lasting protection and reliability for buildings and infrastructure."
  },
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
                      <p>{service.desc}</p>
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
    </>
  );
}
