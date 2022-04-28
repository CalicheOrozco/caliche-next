import React from "react";

const CVComponent = () => {
  return (
    <div>
      <div className="h-screen">
        <object
          data="/CVCaliche.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default CVComponent;
