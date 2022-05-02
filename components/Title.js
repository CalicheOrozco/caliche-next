import Image from "next/image";

export const Title = ({ text }) => {
  return (
    <h1 className="font-bold text-4xl py-1 text-left text-gray-700 dark:text-gray-300">
      {text}
    </h1>
  );
};
