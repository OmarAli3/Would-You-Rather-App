export const RECIEVE_USERS = "RECIEVE_USERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const REMOVE_USER_ANSWER = "REMOVE_USER_ANSWER";

export const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    users,
});

export const updateUserQuestions = (uid, question) => ({
    type: UPDATE_USER_QUESTIONS,
    uid,
    question,
});

export const addUserAnswer = (uid, question, answer) => ({
    type: ADD_USER_ANSWER,
    uid,
    question,
    answer,
});

export const removeUserAnswer = (uid, question, answer) => ({
    type: REMOVE_USER_ANSWER,
    uid,
    question,
    answer,
});
