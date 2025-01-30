// import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuizContext from "./context/QuizContext";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import { useState } from "react";

export default function App() {
  const { questions, setQuestions } = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <QuizContext.Provider
      value={(questions, setQuestions, currentQuestion, setCurrentQuestion)}
    >
      <BrowserRouter>
        <div className="app-container">
          <h1></h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}
