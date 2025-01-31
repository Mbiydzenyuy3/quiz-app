import HomeCard from "../components/HomeCard";
import { useNavigate } from "react-router";
import { useEffect, useContext, useState } from "react";
import { fetchQuestions } from "../services/quiz-api-services";
import { QuizContext } from "../context/QuizContext";

export default function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNaviagte = () => {
    navigate("/QuizQuestions/1");
  };

  const { setQuestions } = useContext(QuizContext);

  useEffect(() => {
    handleGetQuextion();
  }, []);

  const handleGetQuextion = () => {
    fetchQuestions().then((data) => {
      if (data) {
        setQuestions(data);
        setIsLoading(true);
      }
    });
  };

  return <HomeCard isLoading={isLoading} navigate={handleNaviagte} />;
}
