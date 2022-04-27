import React from "react";
import Navbar from "../components/Navbar";

const CV = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <object
          data="/CVCaliche.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default CV;
