import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <ContainerBlock
      title="Experience - Caliche Orozco"
      description="Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative bg-cover bg-center  flex-grow flex items-center justify-center">
          <Experience />
        </div>
        <Footer />
      </div>
    </ContainerBlock>
  );
}
