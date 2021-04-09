import { React } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const RedirectLogin = (props) => {
    const { logedin, children } = props;
    return logedin ? children : <Redirect to="/login" />;
};

const mapStateToProps = ({ authedUser }, { children }) => ({
    logedin: authedUser !== null,
    children,
});

export default connect(mapStateToProps)(RedirectLogin);
