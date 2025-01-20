import useQuiz from "@/contexts/quiz";

export default function Progress() {
  const { answer, questionIndex } = useQuiz();
  const progress = ((questionIndex + Number(answer !== null)) / 15) * 100;

  return (
    <div className="flex h-6 w-full items-center rounded bg-gray-300 px-1">
      <div
        className={`h-4 rounded bg-sky-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
