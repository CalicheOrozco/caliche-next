import React, { useContext } from "react";
import myData from "../constants/data";
import LanguageContext from "../context/lenguageContext";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const { lenguage } = useContext(LanguageContext);
  return (
    <section className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto py-5 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-2 text-center md:text-left">
          {lenguage === "Es"
            ? "Proyectos"
            : lenguage === "En"
            ? "Projects"
            : null}
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {myData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              github={proj.github} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, github }) => {
  return (
    
      <div className="relative overflow-hidden rounded-2xl">
        <div className="object-cover">
        <a href={link} target="_blank" className="w-full block shadow-2xl">
          <img
            src={imgUrl}
            alt={`${title} portfolio`}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />          
          </a>
        </div>
        <a href={github} target="_blank" className="w-full block shadow-2xl">
        <h1 className="absolute top-5 right-2 text-gray-50 font-bold text-xl bg-green-600 hover:bg-green-800 rounded-md px-2">
        < BsGithub className="inline-block mx-2" />
        {title}
        </h1> 
        </a>
      </div>
    
  );
};
