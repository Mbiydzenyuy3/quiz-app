import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import WelcomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

export function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="app-container">
          <h1>True/False Quiz Game</h1>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}
