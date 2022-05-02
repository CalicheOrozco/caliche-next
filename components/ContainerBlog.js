import Image from "next/image";

export const ContainerBlog = (props) => {
  const { children } = props;
  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-94 xl:px-72 py-8">
      {children}
    </div>
  );
};
