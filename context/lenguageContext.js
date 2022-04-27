import React, { useState } from "react";

const LanguageContext = React.createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export function LanguageProvider({ children }) {
  const [lenguage, setlenguage] = React.useState("Es");

  const changeLenguage = (lenguage) => {
    setlenguage(lenguage);
  };

  return (
    <LanguageContext.Provider value={{ lenguage, changeLenguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
