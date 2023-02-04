import React, { useContext } from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import myData from "../constants/data";
import LanguageContext from "../context/lenguageContext";

export default function Hero() {
  const colors = ["#16a34a", "#3B82F6", "#84CC16", "#f94444"];
  const { lenguage } = useContext(LanguageContext);
  return (
    <div className="flex flex-row justify-center py-10 lg:py-2 items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Front-End
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Software Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
            With a passion for travel
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img
            src={myData.avatarUrl}
            alt="avatar"
            className=" shadow rounded"
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">
                {lenguage === "Es"
                  ? "Este soy yo"
                  : lenguage === "En"
                  ? "That's me"
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
