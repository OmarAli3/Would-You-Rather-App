import {
    RECIEVE_QUESTIONS,
    ADD_QUESTION,
    ADD_ANSWER,
    REMOVE_ANSWER,
} from "../actions/questions";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ADD_ANSWER: {
            const question = state[action.qid];
            question[action.answer].votes = question[
                action.answer
            ].votes.concat([action.authedUser]);
            console.log({question})
            return {
                ...state,
                [action.qid]: question,
            };
        }
        case REMOVE_ANSWER: {
            const question = state[action.qid];
            question[action.answer].votes = question[
                action.answer
            ].votes.filter((uid) => uid !== action.authedUser);

            return {
                ...state,
                [action.qid]: question,
            };
        }
        default:
            return state;
    }
};

export default questions;
