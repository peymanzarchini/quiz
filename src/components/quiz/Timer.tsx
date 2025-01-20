import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useQuiz from "@/contexts/quiz";

export default function Timer() {
  const { dispatch, remainingSeconds } = useQuiz();
  const router = useRouter();

  // Format time
  const mins = Math.floor(remainingSeconds / 60);
  const padedMins = String(mins).padStart(2, "0");
  const seconds = remainingSeconds % 60;
  const padedSeconds = String(seconds).padStart(2, "0");

  useEffect(() => {
    if (remainingSeconds === 0) {
      router.replace("/result");
    }

    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, remainingSeconds, router]);

  return (
    <div className="flex items-center justify-center rounded bg-sky-500 px-6 py-2 font-mono font-bold text-white">
      {padedMins}:{padedSeconds}
    </div>
  );
}
