import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

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
    dispatch(showLoading());
    return saveQuestion({
        author: authedUser,
        optionOneText,
        optionTwoText,
    }).then((question) => {
        dispatch(addQuestion(question));
        dispatch(hideLoading());
    });
};

const addAnswer = (qid, authedUser, answer) => ({
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer,
});

const removeAnswer = (qid, authedUser, answer) => ({
    type: REMOVE_ANSWER,
    qid,
    authedUser,
    answer,
});

export const handleAddAnswer = (qid, answer) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addAnswer(qid, authedUser, answer));
    return saveQuestionAnswer({ authedUser, qid, answer }).catch((e) => {
        console.log(e);
        dispatch(removeAnswer(qid, authedUser, answer));
        alert("Error saving the answer. Try again,please");
    });
};
