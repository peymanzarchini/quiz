import { useContext } from "react";

import QuizContext from "./QuizContext";

const useQuiz = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("useQuiz has to be used within <QuizContext.Provider>");
  }

  return quizContext;
};

export default useQuiz;
