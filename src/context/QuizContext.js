import { createContext, useContext } from "react";

const QuizContext = createContext();
export default QuizContext;

export const useQuiz = () => {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error("useQuiz must be used within the QuizProvider");
  }

  return context; // {questions, setQuestions, currentQuestion, setCurrentQuestion, ...}
};
