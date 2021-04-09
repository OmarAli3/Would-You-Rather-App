import { React } from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";

const RedirectLogin = (props) => {
    const { logedin, children } = props;
    return logedin ? children : <LoginPage />;
};

const mapStateToProps = ({ authedUser }, { children }) => ({
    logedin: authedUser !== null,
    children,
});

export default connect(mapStateToProps)(RedirectLogin);
