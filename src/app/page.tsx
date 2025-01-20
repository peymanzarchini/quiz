"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import CTA from "@/components/ui/CTA";
import useQuiz from "@/contexts/quiz";

export default function Home() {
  const { dispatch } = useQuiz();
  const router = useRouter();
  let email: string | null = "";

  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  }

  const handleStartButton = () => {
    dispatch({ type: "reset" });
    router.push("/quiz");
  };

  return (
    <section className="h-full">
      {email === null && (
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 p-4">
          <h1 className="text-4xl font-bold">
            Test your React skill with 15 questions
          </h1>
          <CTA href="/login" size="large" variant="primary">
            Let&apos;s get started
          </CTA>
        </div>
      )}
      {email !== null && (
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 p-4">
          <h1 className="text-4xl font-bold">
            You have 75 seconds to answer 15 questions
          </h1>
          <Button
            type="button"
            size="large"
            variant="primary"
            onClick={handleStartButton}
          >
            Start quiz
          </Button>
        </div>
      )}
    </section>
  );
}
