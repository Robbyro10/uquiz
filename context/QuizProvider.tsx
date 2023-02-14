import { FC, PropsWithChildren, useReducer } from "react";
import { QuizContext, quizReducer } from "./";

export interface QuizState {
  name: string;
  score: number;
}

const QUIZ_INITIAL_STATE: QuizState = {
  name: '',
  score: 0
};

export const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, QUIZ_INITIAL_STATE);

  const getName = (name: string) => {
    dispatch({type: '[Quiz] - Get Name', payload: name});
  }

  const getScore = (score: number) => {
    dispatch({type: '[Quiz] - Get Score', payload: score});
  }

  return (
    <QuizContext.Provider
      value={{
        ...state,

        //* methods
        getName,
        getScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};