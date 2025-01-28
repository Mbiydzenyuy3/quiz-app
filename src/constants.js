export const InitialQuizState = {
  questions: [],
  currentQuestion: 0,
  userAnswers: [],
  score: 0,
  quizStarted: false,
  quizFinished: false,
};

export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 10,
  PASSING_SCORE: 5,
};

export const API_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export const ROUTES = {
  WELCOME: "/",
  QUIZ: "/quiz",
  RESULTS: "/results",
};
