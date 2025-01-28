import * as Yup from "yup";

export const QuizSchema = Yup.object({
  questions: Yup.array()
    .of(
      Yup.object({
        question: Yup.string().required("Question is required"),
        correct_answer: Yup.string()
          .oneOf(["True", "False"], "Answer must be True or False")
          .required("Correct answer is required"),
      })
    )
    .min(1, "At least one question is required"),

  currentQuestion: Yup.number()
    .min(0, "Current question cannot be negative")
    .required("Current question is required"),

  userAnswers: Yup.array().of(
    Yup.string().oneOf(
      ["True", "False", null],
      "User answer must be True, False, or null"
    )
  ),

  score: Yup.number()
    .min(0, "Score cannot be negative")
    .max(
      Yup.ref("questions.length"),
      "Score cannot exceed total number of questions"
    )
    .required("Score is required"),

  quizStarted: Yup.boolean().required("Quiz started status is required"),

  quizFinished: Yup.boolean().required("Quiz finished status is required"),
});
