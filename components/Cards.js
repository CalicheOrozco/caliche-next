import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = (props) => {
  const { title, subtitle, date, image, alt, link } = props;
  return (
    <Link href={link}>
      <div className="flex flex-col w-96 h-96 cursor-pointer md:hover:scale-125">
        <Image
          width={300}
          height={300}
          objectFit="cover"
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={image}
          alt={alt ? alt : title}
        />

        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full ">
          <div>
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>

            <p className="text-gray-700 text-base">{subtitle}</p>
          </div>

          <div className="flex items-center pt-4">
            <Image
              width={40}
              height={40}
              className="rounded-full mr-4"
              src="/avatar.jpg"
              alt="Caliche Orozco Avatar"
            />
            <div className="text-sm flex flex-col gap-1 pl-2">
              <Link href="https://www.linkedin.com/in/calicheorozco/">
                <a
                  className="text-gray-900 leading-none cursor-pointer font-bold"
                  target="_blank"
                >
                  Caliche Orozco
                </a>
              </Link>
              <a className="text-gray-600">{date}</a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
