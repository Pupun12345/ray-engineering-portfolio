"use client";
import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from "react-countup";
import { FaBuilding, FaMapMarkerAlt, FaIndustry, FaHardHat } from "react-icons/fa";
import "./About.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();

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

      {/* Meet Our MD Section -> show only if pathname is /about */}
      {pathname === "/about" && (
        <div className="meet-md">
          <Container>
            <Row className="align-items-center">
              <Col lg={4} md={5}>
                <div className="md-img">
                  <Image
                    src="/img/md.jpg"
                    alt="Managing Director"
                    width={350}
                    height={400}
                    className="img-fluid rounded"
                  />
                </div>
              </Col>
              <Col lg={8} md={7}>
                <div className="md-text">
                  <h2>Meet Our Managing Director</h2>
                  <h4>Nityananda Ray (MD)</h4>
                  <p>
                    Born in Odisha, Nityananda Ray began his career in 2006 and
                    quickly rose through the ranks in the engineering industry. At
                    26, he took a bold step to establish his own company,
                    successfully running it for 8 years before co-founding{" "}
                    <strong>Ray Engg. Projects</strong>.
                  </p>
                  <p>
                    With over 16 years of expertise in Cathodic Protection
                    Systems, backed by strong technical knowledge and leadership,
                    he has delivered major projects with IOCL, Tata Steel, ESSAR,
                    and others. His vision, innovation, and ability to transform
                    challenges into opportunities continue to drive the growth of{" "}
                    <strong>Ray Engineering</strong> into a trusted name in the
                    industry.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

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
                  Ray Engineering is committed to delivering smart, reliable,
                  and sustainable solutions across the Scaffold, Mechanical, and
                  Waterproofing industries. Driven by innovation, quality, and
                  integrity, we blend advanced technology with ethical practices
                  to exceed expectations and create lasting value. Our dedicated
                  team works to build trusted partnerships, inspire progress,
                  and make a meaningful impact for clients and communities,
                  aiming to lead and transform our industry for a better
                  tomorrow.
                </p>
                <Link href="/about">
                  <Button className="btn">Learn More</Button>
                </Link>
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
                      <CountUp end={300} duration={3} />
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
                      <CountUp end={93} duration={3} />
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
                      <CountUp end={69} duration={3} />
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
                      <CountUp end={24} duration={3} />
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
