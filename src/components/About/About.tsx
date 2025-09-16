"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { FaBuilding, FaMapMarkerAlt, FaIndustry, FaHardHat } from "react-icons/fa";
import "./About.css";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <Row>
            <Col xs={12}>
              <h2>About Us</h2>
            </Col>
            <Col xs={12}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About Section */}
      <div className="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <div className="about-img">
                <Image
                  src="/img/about.jpg"
                  alt="About"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className="section-header text-left">
                <p>Welcome to RayEngineering</p>
                <h2>25 Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur facilisis ornare velit non vulputate.
                </p>
                <p>
                  Curabitur non nisl nec nisi scelerisque maximus. Aenean
                  consectetur convallis porttitor.
                </p>
                <Button className="btn">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Facts Section */}
      <div className="fact">
        <Container fluid>
          <Row>
            <Col md={6} className="fact-left">
              <Row>
                <Col xs={6}>
                  <div className="fact-icon">
                    <FaHardHat size={50} />
                  </div>
                  <div className="fact-text">
                    <h2>
                      <CountUp end={109} duration={3} />
                    </h2>
                    <p>Expert Workers</p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="fact-icon">
                    <FaBuilding size={50} />
                  </div>
                  <div className="fact-text">
                    <h2>
                      <CountUp end={485} duration={3} />
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={6} className="fact-right">
              <Row>
                <Col xs={6}>
                  <div className="fact-icon">
                    <FaMapMarkerAlt size={50} />
                  </div>
                  <div className="fact-text">
                    <h2>
                      <CountUp end={789} duration={3} />
                    </h2>
                    <p>Completed Projects</p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="fact-icon">
                    <FaIndustry size={50} />
                  </div>
                  <div className="fact-text">
                    <h2>
                      <CountUp end={890} duration={3} />
                    </h2>
                    <p>Running Projects</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
