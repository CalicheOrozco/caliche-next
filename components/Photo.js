import Image from "next/image";

export const Photo = ({ image, alt }) => {
  return (
    <div className="flex justify-center py-5">
      <Image
        width={600}
        height={300}
        objectFit="cover"
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden rounded"
        src={`/blog/${image}`}
        alt={alt ? alt : "Caliche Orozco Blog Image"}
      />
    </div>
  );
};
