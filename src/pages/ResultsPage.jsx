import ResultCard from "../components/ResultCard";
import { QuizContext } from "../context/QuizContext";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router";

export default function ResultPage() {
  const { tabReponse, setTabReponse } = useContext(QuizContext);

  const score = useMemo(
    () =>
      tabReponse.filter((item) => item.correct_answer === item.yours).length,
    [tabReponse]
  );

  const navigate = useNavigate();

  const handleStar = () => {
    setTabReponse([]);
    navigate("/");
  };

  return (
    <>
      <ResultCard tabResponse={tabReponse} score={score} star={handleStar} />
    </>
  );
}
