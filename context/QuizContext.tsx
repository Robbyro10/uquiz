import { createContext } from "react";

interface ContextProps {
  name: string;
  score: number;

  // methods
  getName: (name: string) => void
  getScore: (score: number) => void

}

export const QuizContext = createContext({} as ContextProps);
