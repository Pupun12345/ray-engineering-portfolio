import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import BootstrapProvider from "@/components/core/Bootstrap-js/BootstrapProvider";
import "../styles/custom.css";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/Backtotop/Backtotop";

export const metadata: Metadata = {
  title: "My Construction Website",
  description:
    "Modern construction company website built with Next.js + Bootstrap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <BootstrapProvider>
            <Navbar />
            <main className="pt-20">{children}</main>
            {/* <About/> */}
            <Footer />
             <BackToTop />
          </BootstrapProvider>
        </div>
      </body>
    </html>
  );
}
