import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
        dispatch(hideLoading());
    });
};
