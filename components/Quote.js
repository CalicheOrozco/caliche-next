import React from "react";

const Quote = (props) => {
  const { text } = props;
  return (
    <div
      className={`text-2xl pl-5 border-l-8 leading-relaxed border-green-600 text-left`}
    >
      "{`${text}`}"
    </div>
  );
};

export default Quote;
