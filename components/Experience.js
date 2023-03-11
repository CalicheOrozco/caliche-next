import React, { useContext } from "react";
import myData from "../constants/data";
import LanguageContext from "../context/lenguageContext";

export default function Experience() {
  const { lenguage } = useContext(LanguageContext);
  const experencies =
    lenguage === "Es"
      ? myData.experienceEs
      : lenguage === "En"
      ? myData.experience
      : null;
  return (
    <section className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto py-5 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-2 text-center md:text-left">
          {lenguage === "Es"
            ? "Experiencia"
            : lenguage === "En"
            ? "Experience"
            : null}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experencies.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === myData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-600 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <lu className="text-gray-600 dark:text-gray-400 my-2">
      {Array.isArray(desc)
        ? desc.map((user, i) => {
          return <li className="text-gray-600 dark:text-gray-400 my-2 list-none">{`${user}`}</li>;
          })
        :  <li className="text-gray-600 dark:text-gray-400 my-2 list-none">{`${desc}`}</li>
      }
        </lu>
    </div>
  );
};
