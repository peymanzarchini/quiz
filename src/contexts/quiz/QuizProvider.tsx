"use client";

import { ReactNode, useReducer } from "react";

import QuizContext from "./QuizContext";
import { ACTIONTYPE, InitialState } from "@/types";
import questions from "@/questions";

/*
 * Local Types
 */

type QuizProviderProps = {
  children: ReactNode;
};

/*
 * Initial State
 */

const initialState: InitialState = {
  answer: null,
  points: 0,
  questionIndex: 0,
  remainingSeconds: 75,
};

/*
 * Reducer
 */

function reducer(state: InitialState, action: ACTIONTYPE): InitialState {
  switch (action.type) {
    // -------- answered --------
    case "answered":
      const currentQuestion = questions[state.questionIndex];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };

    // -------- nextQuestion --------
    case "nextQuestion":
      return { ...state, answer: null, questionIndex: state.questionIndex + 1 };

    // -------- reset --------
    case "reset":
      return { ...initialState };

    // -------- timer --------
    case "timer":
      return { ...state, remainingSeconds: state.remainingSeconds - 1 };

    // -------- default --------
    default:
      throw new Error("Unknown action");
  }
}

/*
 * Provider
 */

export default function QuizProvider({ children }: QuizProviderProps) {
  const [{ answer, points, questionIndex, remainingSeconds }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{ answer, points, questionIndex, remainingSeconds, dispatch }}
    >
      {children}
    </QuizContext.Provider>
  );
}
