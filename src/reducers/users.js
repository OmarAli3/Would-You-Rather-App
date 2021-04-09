import {
    RECIEVE_USERS,
    UPDATE_USER_QUESTIONS,
    ADD_USER_ANSWER,
    REMOVE_USER_ANSWER,
} from "../actions/users";

const users = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case UPDATE_USER_QUESTIONS:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    questions: state[action.uid].questions.concat(
                        action.question
                    ),
                },
            };
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    answers: {
                        ...state[action.uid].answers,
                        [action.question]: action.answers,
                    },
                },
            };
        case REMOVE_USER_ANSWER:
            const answers = { ...state[action.uid].answers };
            delete answers[action.question];
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    answers,
                },
            };
        default:
            return state;
    }
};

export default users;
