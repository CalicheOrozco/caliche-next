import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import NeverNever from "../components/NeverNever";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function nevernever() {
  return (
    <ContainerBlock
      title="I Never Never - Caliche Orozco"
      description="Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative bg-cover bg-center  flex-grow flex items-center justify-center">
          <NeverNever />
        </div>
        <Footer />
      </div>
    </ContainerBlock>
  );
}

export default nevernever;
