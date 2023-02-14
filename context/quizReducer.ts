import { QuizState } from "./";

type QuizActionType = 
    | {type: '[Quiz] - Get Name', payload: string}
    | {type: '[Quiz] - Get Score', payload: number}

export const quizReducer = (state: QuizState, action: QuizActionType): QuizState => {

    switch (action.type) {
        case '[Quiz] - Get Name':
            return {
                ...state,
                name: action.payload,
            }
        case '[Quiz] - Get Score':
            return {
                ...state,
                score: action.payload,
            }
    
        default:
            return state;
    }
}