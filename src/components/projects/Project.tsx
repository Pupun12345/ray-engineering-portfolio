"use client";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const clients = [
  {
    name: "Tata Steel",
    status: "first",
    image: "/img/tata.jpeg",
    description:
      "A leading steel manufacturing company in India known for its large-scale industrial projects. Ray Engineering has successfully delivered scaffolding and mechanical services for their Kalinganagar plant, ensuring project efficiency and safety.",
  },
  {
    name: "Paradeep Phosphates Limited (PPL)",
    status: "second",
    image: "/img/paradeep.png",
    description:
      "A major fertilizer producer in Odisha, India. Ray Engineering provides expert scaffolding and access solutions to support PPL’s industrial infrastructure maintenance and expansions.",
  },
  {
    name: "Indian Oil Corporation",
    status: "third",
    image: "/img/indianoil.png",
    description:
      "India’s largest commercial oil company. Ray Engineering supports Indian Oil with mechanical and waterproofing services, ensuring operational reliability and structural protection.",
  },
  {
    name: "Essar Projects",
    status: "first",
    image: "/img/essar.jpeg",
    description:
      "A reputed EPC contractor with diverse industrial projects. Ray Engineering delivers high-quality scaffolding and mechanical services that meet the demands of Essar’s complex construction sites.",
  },
  {
    name: "KSS Engineers India Ltd",
    status: "second",
    image: "/img/KSS.jpeg",
    description:
      "A prominent engineering company focused on construction and infrastructure. Ray Engineering partners to provide specialized scaffolding and waterproofing solutions for their project portfolios.",
  },
  {
    name: "Tuaman Engineering Limited",
    status: "third",
    image: "/img/Tuaman.png",
    description:
      "An engineering firm known for executing industrial projects across India. Ray Engineering’s scaffolding and mechanical expertise ensures safe and efficient project execution.",
  },
  {
    name: "URC Building Values",
    status: "first",
    image: "/img/URC.png",
    description:
      "A construction service provider emphasizing quality and durability. Ray Engineering contributes with tailored scaffolding and waterproofing services catering to URC’s construction needs.",
  },
  {
    name: "Punj Lloyd (PSPL)",
    status: "second",
    image: "/img/Punj.jpeg",
    description:
      "A leading infrastructure and engineering company in India. Ray Engineering supports Punj Lloyd with varied scaffolding and mechanical solutions for large-scale industrial projects.",
  },
  {
    name: "KazStroy Service",
    status: "third",
    image: "/img/KazStroy.jpeg",
    description:
      "An industrial service company specializing in comprehensive construction support. Ray Engineering’s offerings include advanced scaffolding and waterproofing services to ensure project success.",
  },
];

export default function ClientsComponent() {
  const [activeFilter, setActiveFilter] = useState("*");

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
              <h2>Our Clients</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/clients">Our Clients</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Clients Section */}
      <div className="portfolio-section py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase text-secondary mb-2">Our Clients</p>
            <h2 className="fw-bold">Meet Our Clients</h2>
          </div>

          {/* Filters */}
          <Row className="mb-4">
            <Col className="text-center">
              {["*", "first", "second", "third"].map((filter) => (
                <Button
                  key={filter}
                  className={`filter-btn me-2 ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "*"
                    ? "All"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </Col>
          </Row>

          {/* Clients */}
          <Row>
            {clients
              .filter((c) => activeFilter === "*" || c.status === activeFilter)
              .map((client, index) => (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  className="mb-4 portfolio-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="portfolio-card">
                    <div className="portfolio-img-wrapper">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={400}
                        height={300}
                        className="portfolio-img"
                      />
                      <div className="portfolio-overlay">
                        <p>{client.description}</p>
                      </div>
                    </div>
                    <div className="portfolio-text">
                      <h3>{client.name}</h3>
                      <a
                        className="btn"
                        href={client.image}
                        target="_blank"
                        rel="noreferrer"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>

          <Row>
            <Col className="text-center mt-3">
              <Button className="load-more-btn">Load More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
