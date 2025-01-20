"use client";

import CTA from "@/components/ui/CTA";
import ProtectedRoute from "@/components/ProtectedRoute";
import useQuiz from "@/contexts/quiz";

export default function Result() {
  const { points } = useQuiz();

  return (
    <ProtectedRoute>
      <section className="h-full">
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 p-4">
          <h2 className="text-4xl font-bold">Finished</h2>
          <p className="text-2xl text-gray-700">
            <strong className="text-black">{points}</strong> / 280 Points
          </p>
          <CTA href="/" size="large" variant="primary">
            Reset quiz
          </CTA>
        </div>
      </section>
    </ProtectedRoute>
  );
}
