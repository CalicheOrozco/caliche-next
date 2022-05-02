import React from "react";

export const Subtitle = ({ text }) => {
  return (
    <h2 className="font-bold text-3xl text-center text-gray-700 dark:text-gray-300">
      {text}
    </h2>
  );
};
