import useQuiz from "@/contexts/quiz";
import questions from "@/questions";

/*
 * Constants
 */

const questionColor = {
  none: "bg-gray-300 text-gray-800 hover:bg-sky-500 hover:text-white",
  correct: "bg-green-500 text-white",
  wrong: "bg-red-500 text-white",
};

/*
 * Component
 */

export default function Questions() {
  const { answer, dispatch, questionIndex } = useQuiz();
  const currentQuestion = questions[questionIndex];
  const hasAnswered = answer !== null;

  return (
    <ul className="flex w-full max-w-[768px] flex-col gap-4">
      {currentQuestion.options.map((option, index) => (
        <li key={option}>
          <button
            type="button"
            disabled={answer !== null}
            className={`w-full rounded p-4 text-xl ${
              // Set the button color based on the answer status
              hasAnswered
                ? questionColor[
                    index === currentQuestion.correctOption
                      ? "correct"
                      : "wrong"
                  ]
                : questionColor.none
            }`}
            onClick={() => dispatch({ type: "answered", payload: index })}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
