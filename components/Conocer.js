import React, { useState, useEffect } from "react";

const Conocer = () => {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState(null);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateFrase = () => {
    const num = getRandomInt(0, frases.length);
    const frase = frases[num];
    const newFrases = frases.splice(num, 1);
    setFrase(frase);
    return frase;
  };

  const listasFrases = useEffect(() => {
    fetch("/conocer.json")
      .then((res) => res.json())
      .then((res) => setFrases(res));
    generateFrase();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-6xl mx-auto py-5 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl xl:text-9xl font-bold py-20 text-center md:text-left">
          Conocer
        </h1>
      </div>
      <div className="w-ful mx-auto py-5 bg-white dark:bg-gray-800  rounded-xl py-5">
        <div className="text-center w-full mx-auto">
          {frases.length > 0 ? (
            <>
              <p
                className="leading-loose text-2xl md:text-4xl font-semibold mx-4 pb-5"
                style={{ lineHeight: "3rem" }}
              >
                {frase}
              </p>
              <button
                type="button"
                onClick={() => {
                  generateFrase();
                }}
                className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                {frase === undefined ? "Generar frase" : "Generar otra frase"}
              </button>
            </>
          ) : frase ? (
            <div role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t hi px-4 py-2">
                ¡Se han terminado los Nunca nunca!
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Recuerda que me puedes contactar para agregar mas frases.</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Conocer;
