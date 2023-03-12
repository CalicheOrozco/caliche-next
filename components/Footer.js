import React from "react";
import myData from "../constants/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="w-full px-5 py-5 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around items-center mt-4">
          <div>
            <p>{year} &copy; Caliche Orozco. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-green-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://calicheorozco.com"
                >
                  Caliche Orozco
                </a>
              </div>
            </p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <a
              href={myData.socialLinks.github}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
              target="_blank"
            >
              < BsGithub className="inline-block text-xl" />
            </a>
            <a
              href={myData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
              target="_blank"
            >
              < BsLinkedin className="inline-block text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
