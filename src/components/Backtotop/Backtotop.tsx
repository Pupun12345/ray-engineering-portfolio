"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-bootstrap-icons"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Backtotop.css"; // Import the CSS file

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`back-to-top ${visible ? "show" : ""}`}
    >
      <ArrowUp size={26} />
    </button>
  );
}
