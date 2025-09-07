"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiCalendar, FiPhone, FiMail } from "react-icons/fi";
import "../../styles/custom.css";
import "./Navbar.css";
import "animate.css";
import { all_routes } from "@/data/allroutes";
import { usePathname } from "next/dist/client/components/navigation";

export default function Navbar() {
  const route = all_routes;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Wrapper */}
      <div className="header">
        {/* Top Bar (hidden with CSS on scroll) */}
        <div className={`top-bar ${scrolled ? "hidden" : ""}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="logo">
                  <h1>RayEngineer</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 d-none d-lg-block">
                <div className="row">
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <FiCalendar size={45} />
                      </div>
                      <div className="top-bar-text">
                        <h3>Opening Hour</h3>
                        <p>Mon - Sat, 7:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <FiPhone size={45} />
                      </div>
                      <div className="top-bar-text">
                        <h3>Call Us</h3>
                        <p>+91 9337670266</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <FiMail size={45} />
                      </div>
                      <div className="top-bar-text">
                        <h3>Email Us</h3>
                        <p>rayengineering1@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Bar */}
        <div className={`nav-bar ${scrolled ? "nav-sticky" : ""}`}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <span className="navbar-brand">MENU</span>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarCollapse"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse justify-content-between ${
                  isOpen ? "show" : ""
                }`}
                id="navbarCollapse"
              >
             <div className="navbar-nav mr-auto">
  <Link href="/" className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`} onClick={closeNavbar}>
    Home
  </Link>
  <Link href={route.About} className={`nav-item nav-link ${pathname === route.About ? "active" : ""}`} onClick={closeNavbar}>
    About
  </Link>
  <Link href={route.Service} className={`nav-item nav-link ${pathname === route.Service ? "active" : ""}`} onClick={closeNavbar}>
    Service
  </Link>
  <Link href={route.Team} className={`nav-item nav-link ${pathname === route.Team ? "active" : ""}`} onClick={closeNavbar}>
    Team
  </Link>
  <Link href={route.Projects} className={`nav-item nav-link ${pathname === route.Projects ? "active" : ""}`} onClick={closeNavbar}>
    Project
  </Link>
  <Link href={route.Contact} className={`nav-item nav-link ${pathname === route.Contact ? "active" : ""}`} onClick={closeNavbar}>
    Contact
  </Link>
</div>
                <div className="ml-auto">
                  <Link href="/quote" className="btn" onClick={closeNavbar}>
                    Get A Quote
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
