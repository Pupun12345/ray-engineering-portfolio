"use client";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          {/* Office Contact */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p>
                <FaMapMarkerAlt /> Gandakipur, Gopiakuda, Kujanga, Jagatsinghpur
              </p>
              <p>
                <FaPhoneAlt /> +91- 9337670266
              </p>
              <p>
                <FaEnvelope /> contact@rayengineering.org.in
              </p>
              <div className="footer-social">
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaFacebookF /></Link>
                <Link href="#"><FaYoutube /></Link>
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <Link href="#">Scaffolding Services</Link>
              <Link href="#">Mechanical Services</Link>
              <Link href="#">Waterproofing Services</Link>
              <Link href="#">Access Staircases</Link>
              <Link href="#">Event Scaffolding</Link>
            </div>
          </div>

          {/* Useful Pages */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <Link href="./about">About Us</Link>
              <Link href="./contact">Contact Us</Link>
              <Link href="./team">Our Team</Link>
              <Link href="./client">Our Clients</Link>
              <Link href="./contact">Contact Us</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>
                Sign up to be the first to know about new projects, promotions, and industry news.
              </p>
              <div className="form">
                <input className="form-control" placeholder="Email here" />
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <div className="container footer-menu">
        <div className="f-menu">
          <Link href="#">Terms of use</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Cookies</Link>
          <Link href="#">Help</Link>
          <Link href="#">FAQ</Link> {/* ✅ Changed from FQAs to FAQ */}
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright-text">
              &copy; <Link href="#">Ray Engineering</Link>
              <img src="/img/smart-logo.png" alt="Ray Engineering Logo" className="footer-logo" />, 
              made by Smartcare
              <img src="/img/ray-logo.png" alt="Smartcare Logo" className="footer-logo" />
            </p>
          </div>
          <div className="col-md-6">
            <p className="copyright-text">
              Designed By{" "}
              <a
                href="https://www.linkedin.com/company/smartcare-solutions-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMARTCARE
              </a>
              <img src="/img/ray-logo.png" alt="Smartcare Logo" className="footer-logo" />
              {" "}+91 78530 31366
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
