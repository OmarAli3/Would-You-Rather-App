import { RECIEVE_QUESTIONS } from "../actions/questions";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        default:
            return state;
    }
};

export default questions;
