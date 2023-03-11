import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import NuncaNunca from "../components/NuncaNunca";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const nuncanunca = () => {
  return (
    <ContainerBlock
      title="Yo nunca nunca - Caliche Orozco"
      description="Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative bg-cover bg-center  flex-grow flex items-center justify-center">
          <NuncaNunca />
        </div>
        <Footer />
      </div>
    </ContainerBlock>
  );
};

export default nuncanunca;
