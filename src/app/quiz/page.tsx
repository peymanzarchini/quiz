"use client";

import { useRouter } from "next/navigation";

import Questions from "@/components/quiz/Questions";
import Statistics from "@/components/quiz/Statistics";
import Timer from "@/components/quiz/Timer";
import Button from "@/components/ui/Button";
import useQuiz from "@/contexts/quiz";
import questions from "@/questions";

export default function Quiz() {
  const { answer, dispatch, questionIndex } = useQuiz();
  const router = useRouter();
  const currentQuestion = questions[questionIndex];

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center gap-8 p-4 pt-12">
        <Statistics />
        <h2 className="p-8 text-2xl">{currentQuestion.question}</h2>
        <Questions />
        <div className="flex w-full max-w-[768px] justify-between">
          <Timer />
          {questionIndex < 14 && (
            <Button
              type="button"
              disabled={answer === null}
              size="medium"
              variant="primary"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </Button>
          )}
          {questionIndex === 14 && (
            <Button
              type="button"
              disabled={answer === null}
              size="medium"
              variant="primary"
              onClick={() => router.replace("/result")}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
