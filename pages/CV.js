import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import CVComponent from "../components/CVComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CV = () => {
  return (
    <ContainerBlock>
      <Navbar />
      <CVComponent />
      <Footer />
    </ContainerBlock>
  );
};

export default CV;
