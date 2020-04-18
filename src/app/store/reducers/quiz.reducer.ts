import { Quiz } from '../models/quiz.model';
import * as QuizActions from '../actions/quiz.actions';

const initialState: Quiz = {
    Answer1: null,
    Answer2: null,
    Answer3: null,
    Answer4: null,
    Answer5: null,
    Answer6: null,
    Answer7: null,
    Answer8: null,
    Answer9: null,
    Answer10: null,
    Passed: null
}

export function reducer(state: Quiz = initialState, action: QuizActions.Actions) {
    switch(action.answerOf) {
        case 1: 
            state.Answer1 = action.payload;
            return state;
        case 2: 
            state.Answer2 = action.payload;
            return state;
        case 3: 
            state.Answer3 = action.payload;
            return state;
        case 4: 
            state.Answer4 = action.payload;
            return state;
        case 5: 
            state.Answer5 = action.payload;
            return state;
        case 6: 
            state.Answer6 = action.payload;
            return state;
        case 7: 
            state.Answer7 = action.payload;
            return state;
        case 8: 
            state.Answer8 = action.payload;
            return state;
        case 9: 
            state.Answer9 = action.payload;
            return state;
        case 10: 
            state.Answer10 = action.payload;
            return state;
        default:
            return state;
    }
}