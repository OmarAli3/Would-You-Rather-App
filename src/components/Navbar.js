import { React, Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";

class Navbar extends Component {
    handleLogout = () => {
        this.props.dispatch(removeAuthedUser());
    };
    render() {
        const { authedUser, path } = this.props;
        return (
            <nav className="nav">
                <ul>
                    <li
                        className={`nav-item ${
                            path === "/" ? "active-nav" : ""
                        }`}
                    >
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li
                        className={`nav-item ${
                            path === "/add" ? "active-nav" : ""
                        }`}
                    >
                        <NavLink to="/add">New Question</NavLink>
                    </li>
                    <li
                        className={`nav-item ${
                            path === "/leaderboard" ? "active-nav" : ""
                        }`}
                    >
                        <NavLink to="/leaderboard">Leader Board</NavLink>
                    </li>
                    {authedUser.name && (
                        <>
                            <li id="username">{`Hi, ${authedUser.name}`}</li>
                            <li>
                                <img
                                    src={authedUser.avatarURL}
                                    alt="avatar"
                                    className="profile-pic"
                                />
                            </li>
                            <li
                                style={{ cursor: "pointer" }}
                                className="nav-item"
                                onClick={this.handleLogout}
                            >
                                logout
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ users, authedUser }, { location }) => ({
    authedUser: { ...users[authedUser] },
    path: location.pathname,
});
export default withRouter(connect(mapStateToProps)(Navbar));
