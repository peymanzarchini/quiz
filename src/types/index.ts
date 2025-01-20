export type InitialState = {
  answer: number | null;
  points: number;
  questionIndex: number;
  remainingSeconds: number;
};

export type ACTIONTYPE =
  | { type: "answered"; payload: number }
  | { type: "nextQuestion" }
  | { type: "reset" }
  | { type: "timer" };
