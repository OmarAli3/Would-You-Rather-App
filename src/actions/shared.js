import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "johndoe"; //to be changed when making login page

export const handleInitialData = () => (dispatch) =>
    getInitialData().then(({ users, questions }) => {
        dispatch(recieveUsers(users));
        dispatch(recieveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
    });
