"use client";

import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/custom.css'


export default function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>{children}</>;
}
