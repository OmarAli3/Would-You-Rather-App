import { saveQuestion } from "../utils/api";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const recieveQuestions = (questions) => ({
    type: RECIEVE_QUESTIONS,
    questions,
});

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
});

export const handleAddQuestion = (optionOneText, optionTwoText) => (
    dispatch,
    getState
) => {

    const { authedUser } = getState();
    //todo: show a loading page
    return saveQuestion({
        author: authedUser,
        optionOneText,
        optionTwoText,
    }).then((question) => dispatch(addQuestion(question)));
};
