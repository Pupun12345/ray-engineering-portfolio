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
                <FaMapMarkerAlt /> 123 Street, New York, USA
              </p>
              <p>
                <FaPhoneAlt /> +012 345 67890
              </p>
              <p>
                <FaEnvelope /> info@example.com
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
              <Link href="#">Building Construction</Link>
              <Link href="#">House Renovation</Link>
              <Link href="#">Architecture Design</Link>
              <Link href="#">Interior Design</Link>
              <Link href="#">Painting</Link>
            </div>
          </div>

          {/* Useful Pages */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <Link href="#">About Us</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Our Team</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Testimonial</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
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
                href="https://htmlcodex.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMARTCARE
              </a>
              <img src="/img/ray-logo.png" alt="Smartcare Logo" className="footer-logo" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
