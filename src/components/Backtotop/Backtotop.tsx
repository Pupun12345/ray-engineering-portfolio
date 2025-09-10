"use client";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowUpCircle } from "react-bootstrap-icons"; // React Bootstrap Icon
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Button
      variant="warning"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`back-to-top rounded-circle shadow-lg ${visible ? "show" : ""}`}
    >
      <ArrowUpCircle size={28} />
    </Button>
  );
}
