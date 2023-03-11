import React, { useContext } from "react";
import myData from "../constants/data";
import LanguageContext from "../context/lenguageContext";
import Link from "next/link";

export default function AboutMe() {
  const { lenguage } = useContext(LanguageContext);

  const text =
    lenguage === "Es"
      ? myData.about.descriptionEs
      : lenguage === "En"
      ? myData.about.description
      : null;

  return (
    <section className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto py-5 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-2 text-center md:text-left">
          {lenguage === "Es"
            ? "¿Quien soy?"
            : lenguage === "En"
            ? "About Me."
            : null}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {lenguage === "Es"
              ? myData.about.titleEs
              : lenguage === "En"
              ? myData.about.title
              : null}
            <a
              className="bg-green-600 rounded-md px-2 py-1 text-white"
              href={myData.about.currentProjectUrl}
              target="_blank"
            >
              {myData.about.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {lenguage === "Es"
                  ? "Contacto"
                  : lenguage === "En"
                  ? "Contact"
                  : null}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {lenguage === "Es"
                  ? "Para cualquier tipo de ayuda ó consulta, envía un "
                  : lenguage === "En"
                  ? "For any sort help / enquiry, shoot a "
                  : null}
                <a
                  href={`mailto:${myData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>
                {lenguage === "Es"
                  ? " y respondere lo antes posible."
                  : lenguage === "En"
                  ? " and I'll get back. I swear."
                  : null}
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {lenguage === "Es"
                  ? "Oportunidades de trabajo"
                  : lenguage === "En"
                  ? "Job Opportunities"
                  : null}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {lenguage === "Es"
                  ? "Actualmente estoy buscando oportunidades de empleo y agradecería si me consideraran para cualquier puesto vacante que se alinee con mis skills. Por favor, echa un vistazo a mi "
                  : lenguage === "En"
                  ? "I am currently seeking employment opportunities and would appreciate it if you would consider me for any open positions that align with my qualifications. Please take a look at my "
                  : null}
                <Link href="/CV">
                  <a className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300">
                    Resume
                  </a>
                </Link>
                {lenguage === "Es"
                  ? " y estaré encantado de discutir cualquier posible oportunidad de trabajo con usted."
                  : lenguage === "En"
                  ? ", and I would be happy to discuss any potential job opportunities with you."
                  : null}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {lenguage === "Es"
                ? "Redes Sociales"
                : lenguage === "En"
                ? "Social Links"
                : null}
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={myData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={myData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {text?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-green-600 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/python/python.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/terminal/terminal.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/bootstrap/bootstrap.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/npm/npm.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/yarn/yarn.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/webpack/webpack.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/visual-studio-code/visual-studio-code.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/figma/figma.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
                src="https://raw.githubusercontent.com/github/explore/main/topics/selenium/selenium.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
