"use client";

import { createContext } from "react";

import { ACTIONTYPE } from "@/types";

/*
 * Local Types
 */

type QuizContextType = {
  answer: number | null;
  points: number;
  questionIndex: number;
  remainingSeconds: number;
  dispatch: (action: ACTIONTYPE) => void;
};

/*
 * Context
 */

const QuizContext = createContext<QuizContextType | null>(null);

export default QuizContext;
