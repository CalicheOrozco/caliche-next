import Image from "next/image";

export const Code = (props) => {
  const { children } = props;
  return (
    <a className="bg-green-400 text-green-400 rounded-lg px-2 bg-opacity-20">
      {children}
    </a>
  );
};
