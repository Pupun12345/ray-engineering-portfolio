"use client";
import "animate.css";
import "../styles/custom.css";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";

import { FiUsers, FiCheckCircle, FiLifeBuoy } from "react-icons/fi";
import About from "./about/page";
import ServiceComponent from "@/components/Service/Service";
import Team from "@/components/team/Team";
import Project from "@/components/projects/Project";
import Contact from "@/components/contact/Contact";

import { Carousel } from "react-bootstrap";
import { useState } from "react";

export default function HomeSection() {
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleClose = () => {
    setShow(false);
    setVideoSrc("");
  };

  // Convert any YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
    }
    return "";
  };

  const handleShow = (url: string) => {
    setVideoSrc(url);
    setShow(true);
  };

  return (
    <>
      {/* Carousel Start */}
      <Carousel fade interval={3000} pause={false}>
        {[1, 2, 3].map((num) => (
          <Carousel.Item
            key={num}
            style={{ position: "relative", height: "600px" }}
          >
            <Image
              src={`/img/carousel-${num}.jpg`}
              alt={`Carousel Image ${num}`}
              fill
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
              <p className="animated fadeInRight">
                {num === 1
                  ? "We Are Professional"
                  : num === 2
                  ? "Professional Builder"
                  : "We Are Trusted"}
              </p>
              <h1 className="animated fadeInLeft">
                {num === 1
                  ? "For Your Dream Project"
                  : num === 2
                  ? "We Build your requirement Structure"
                  : "For Your Innovative Solutions"}
              </h1>
              <Button href="/quote" className="animated fadeInUp">
                Get A Quote
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Carousel End */}

      {/* Feature Start */}
      <div className="feature wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="top-bar-icon mb-4">
                  <FiUsers size={45} color="#e9e4e3ff" />
                </div>
                <div className="feature-text">
                  <h3>Expert Worker</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare
                    velit non
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="top-bar-icon ">
                  <FiCheckCircle size={45} color="#fff5f1ff" />
                </div>
                <div className="feature-text">
                  <h3>Quality Work</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare
                    velit non
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="feature-item">
                <div className="top-bar-icon ">
                  <FiLifeBuoy size={45} color="#ffffffff" />
                </div>
                <div className="feature-text">
                  <h3>24/7 Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare
                    velit non
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Video Section */}
      <div className="video wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <button
            type="button"
            className="btn-play"
            onClick={() =>
              handleShow(getEmbedUrl("https://www.youtube.com/watch?v=IjlYXtI2-GU"))
            }
          >
            <span></span>
          </button>
        </div>

        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          contentClassName="video-modal-content"
        >
          <Modal.Body className="p-0 position-relative">
            <button
              type="button"
              className="close btn-close-custom"
              onClick={handleClose}
            >
              &times;
            </button>
            {videoSrc && (
              <div className="ratio ratio-16x9">
                <iframe
                  src={videoSrc}
                  title="YouTube Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>

      {/* Render other pages */}
      <About />
      <ServiceComponent />
      <Team />
      <Project />
      <Contact />
    </>
  );
}
