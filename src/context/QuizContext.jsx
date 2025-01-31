import { createContext, useState } from "react";


export const QuizContext = createContext();

export const UseData = ({ children }) => {
  const [tabQuestions, setQuestions] = useState([]);
  const [tabReponse, setTabReponse] = useState([]);
  return (
    <QuizContext.Provider
      value={{ tabQuestions, tabReponse, setTabReponse, setQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
};


