import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./_DATA";

export const getInitialData = () =>
    Promise.all([_getQuestions(), _getUsers()])
        .then(([questions, users]) => ({
            questions,
            users,
        }))
        .catch((e) => console.log(e));
export const saveQuestion = (info) => _saveQuestion(info);
export const saveQuestionAnswer = (info) => _saveQuestionAnswer(info);
