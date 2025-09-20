"use client";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Team.css";

const teamMembers = [
  { name: "SIBA SAHOO", role: "GENERAL MANAGER", image: "/img/GM.jpg" },
  { name: "NIRANJAN MOHAPATRA", role: "CO-ORDINATOR", image: "/img/nm.jpg" },
  { name: "SK NIAZ AHEMED", role: "TASK IN-CHARGE", image: "/img/sk.jpg" },
  { name: "TRIBHUBAN SAHOO", role: "PLANNING ENGINEER", image: "/img/tb.jpg" },
  { name: "PRAKASH CH. PRUSTY", role: "PPL IN-CHARGE", image: "/img/pcp.jpg" },
  { name: "SHRIDHAR DAS", role: "ACCOUNTANT", image: "/img/sd.jpg" },
  {
    name: "HIMANSU SEKHAR PARIDA",
    role: "SOFTWARE ENGINEER",
    image: "/img/hm.jpg",
  },
  { name: "NANDAN MISHRA", role: "HR", image: "/img/nnm.jpg" },
];

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Team() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Team</h2>
              <div className="breadcrumb-links">
                <a href="#">Home</a>
                <a href="/team">Our Team</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Team Section */}
      <div className="team-section py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase text-secondary mb-2">Our Team</p>
            <h2 className="fw-bold">Meet Our Professionals</h2>
          </div>
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={index} lg={3} md={6} className="mb-4 d-flex">
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="w-100"
                >
                  <Card className="team-card border-0 shadow-lg text-center">
                    <div className="team-img-wrapper">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="team-img"
                      />
                      <div className="overlay">
                        <div className="team-social-links">
                          <a href="#" className="social-link twitter">
                            <FaTwitter />
                          </a>
                          <a href="#" className="social-link facebook">
                            <FaFacebookF />
                          </a>
                          <a href="#" className="social-link linkedin">
                            <FaLinkedinIn />
                          </a>
                          <a href="#" className="social-link instagram">
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="team-card-body">
                      <Card.Title className="text-warning">
                        {member.name}
                      </Card.Title>
                      <Card.Text>{member.role}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
