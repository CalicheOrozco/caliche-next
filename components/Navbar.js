import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import myData from "../constants/data";
import ReactCountryFlag from "react-country-flag";
import LanguageContext from "../context/lenguageContext";
import { BsGithub, BsLinkedin, BsFillSunFill, BsFillMoonFill, BsArrowDown } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lenguage, changeLenguage } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full  mx-auto px-4 py-5">
      <div className="flex  md:flex-row justify-around items-center">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100 hover:text-green-600 dark:hover:text-green-600">
                {myData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-600">
                {myData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <Link href="/about">
            <a
              className={`text-base  ${
                router.asPath === "/about"
                  ? "text-green-600 font-bold"
                  : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-600 font-normal"
              }`}
            >
              {lenguage === "Es"
                ? "¿Quien soy?"
                : lenguage === "En"
                ? "About"
                : null}
              {router.asPath === "/about" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-base  ${
                router.asPath === "/projects"
                  ? "text-green-600 font-bold"
                  : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-600 font-normal"
              }`}
            >
              {lenguage === "Es"
                ? "Proyectos"
                : lenguage === "En"
                ? "Projects"
                : null}

              {router.asPath === "/projects" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-base  ${
                router.asPath === "/experience"
                  ? "text-green-600 font-bold"
                  : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-600 font-normal"
              }`}
            >
              {lenguage === "Es"
                ? "Experiencia"
                : lenguage === "En"
                ? "Experience"
                : null}
              {router.asPath === "/experience" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`text-base  ${
                router.asPath === "/blog"
                  ? "text-green-600 font-bold"
                  : "text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-600 font-normal"
              }`}
            >
              Blog
              {router.asPath === "/blog" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={myData.socialLinks.github}
            className="text-base font-normal text-gray-600 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-600 hidden lg:block"
            target="_blank"
          >
            < BsGithub className="inline-block text-xl" />
          </a>
          <a
            href={myData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-600 hidden lg:block"
            target="_blank"
          >
            < BsLinkedin className="inline-block text-xl" />
          </a>
          <button
            aria-label="Toggle Language"
            type="button"
            onClick={() => changeLenguage(lenguage === "Es" ? "En" : "Es")}
          >
            {mounted &&
              (lenguage === "En" ? (
                <div>
                  <div className="text-base font-normal text-gray-600 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-600">
                    <ReactCountryFlag
                      aria-label="Spanish Language"
                      countryCode="MX"
                      className="pr-2"
                    />
                    Español
                  </div>
                </div>
              ) : (
                <div className="text-base font-normal text-gray-600 dark:text-gray-300">
                  <ReactCountryFlag
                    aria-label="Spanish Language"
                    countryCode="US"
                    className="pr-2"
                  />
                  English
                </div>
              ))}
          </button>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {mounted && (
              <div className="flex justify-center">
                {theme === "dark" ? (
                  <BsFillSunFill className="inline-block text-3xl w-4 h-4 text-yellow-500 hover:text-white" />
                ) : (
                  <BsFillMoonFill className="inline-block text-3xl w-4 h-4 text-gray-500 hover:text-gray-900" />
                )}
              </div>
            )}
          </button>
          <Link href="/CV">
            <button
              type="button"
              class="text-white bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              {lenguage === "Es"
                ? "Ver CV"
                : lenguage === "En"
                ? " View Resume"
                : null}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-x-4 justify-around md:hidden mt-4">
        <Link href="/about">
          <a className={`text-base font-normal ${router.asPath === "/about" ? "text-green-600" : "text-gray-600 dark:text-gray-300" }`}>
            {lenguage === "Es"
              ? "¿Quien soy?"
              : lenguage === "En"
              ? "About"
              : null}
              {router.asPath === "/about" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
          </a>
        </Link>
        <Link href="/projects">
          <a className={`text-base font-normal ${router.asPath === "/projects" ? "text-green-600" : "text-gray-600 dark:text-gray-300" }`}>
            {lenguage === "Es"
              ? "Proyectos"
              : lenguage === "En"
              ? "Projects"
              : null}
              {router.asPath === "/projects" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
          </a>
        </Link>
        <Link href="/experience">
          <a className={`text-base font-normal ${router.asPath === "/experience" ? "text-green-600" : "text-gray-600 dark:text-gray-300" }`}>
            {lenguage === "Es"
              ? "Experiencia"
              : lenguage === "En"
              ? "Experience"
              : null}
              {router.asPath === "/experience" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
          </a>
        </Link>
        <Link href="/blog">
          <a className={`text-base font-normal ${router.asPath === "/blog" ? "text-green-600" : "text-gray-600 dark:text-gray-300" }`}>
            Blog
            {router.asPath === "/blog" && (
                < BsArrowDown className="inline-block h-3 w-3" />
              )}
          </a>
          
        </Link>
      </div>
    </div>
  );
}
