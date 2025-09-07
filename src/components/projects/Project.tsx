"use client";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const projects = [
  { name: "Project 1", status: "first", image: "/img/portfolio-1.jpg" },
  { name: "Project 2", status: "second", image: "/img/portfolio-2.jpg" },
  { name: "Project 3", status: "third", image: "/img/portfolio-3.jpg" },
  { name: "Project 4", status: "first", image: "/img/portfolio-4.jpg" },
  { name: "Project 5", status: "second", image: "/img/portfolio-5.jpg" },
  { name: "Project 6", status: "third", image: "/img/portfolio-6.jpg" },
  { name: "Project 1", status: "first", image: "/img/portfolio-1.jpg" },
  { name: "Project 2", status: "second", image: "/img/portfolio-2.jpg" },
  { name: "Project 3", status: "third", image: "/img/portfolio-3.jpg" },
  { name: "Project 4", status: "first", image: "/img/portfolio-4.jpg" },
  { name: "Project 5", status: "second", image: "/img/portfolio-5.jpg" },
  { name: "Project 6", status: "third", image: "/img/portfolio-6.jpg" },
];

export default function ProjectsComponent() {
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
              <h2>Our Projects</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/portfolio">Our Projects</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase text-secondary mb-2">Our Projects</p>
            <h2 className="fw-bold">Visit Our Projects</h2>
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

          {/* Projects */}
          <Row>
            {projects
              .filter((p) => activeFilter === "*" || p.status === activeFilter)
              .map((project, index) => (
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
                        src={project.image}
                        alt={project.name}
                        width={400}
                        height={300}
                        className="portfolio-img"
                      />
                      <div className="portfolio-overlay">
                        <p>
                          Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                          mi. Curabitur facilis ornare velit non. Aliquam metus
                          tortor, auctor id gravida condime, viverra quis sem.
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-text">
                      <h3>{project.name}</h3>
                      <a
                        className="btn"
                        href={project.image}
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
