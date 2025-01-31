import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import QuizQuestions from "./pages/QuizPage";
import ResultPage from "./pages/ResultsPage";
import { UseData } from "./context/QuizContext";

export default function App() {
  return (
    <div className="app-container">
      <UseData>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/QuizQuestions/:number" element={<QuizQuestions />} />
            <Route path="/ScorePage" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </UseData>
    </div>
  );
}
