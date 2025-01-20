import Progress from "@/components/ui/Progress";
import useQuiz from "@/contexts/quiz";

export default function Statistics() {
  const { points, questionIndex } = useQuiz();

  return (
    <div className="flex w-full max-w-[768px] flex-col gap-4">
      <Progress />
      <div className="flex justify-between">
        <p className="text-gray-700">
          Question <strong className="text-black">{questionIndex + 1}</strong> /
          15
        </p>
        <p className="text-gray-700">
          <strong className="text-black">{points}</strong> / 280 Points
        </p>
      </div>
    </div>
  );
}
