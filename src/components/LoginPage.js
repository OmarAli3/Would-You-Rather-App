import { React, Component } from "react";
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import Select from "react-select";
import { VscAccount } from "react-icons/vsc";
import { setAuthedUser } from "../actions/authedUser";

class LoadingPage extends Component {
    state = {
        authedUser: "",
    };
    handleChange = (e) => {
        this.setState({
            authedUser: e.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { authedUser } = this.state;
        authedUser && dispatch(setAuthedUser(authedUser));
    };
    render() {
        const { users, authedUser } = this.props;

        return (
            <>
                {!authedUser ? (
                    <div className="dashboard new-question login">
                        <div className="login-header">
                            <strong>
                                Welcome to the Would You Rather App!
                            </strong>
                            <span>Please, sign in to continue</span>
                        </div>
                        <form
                            onSubmit={this.handleSubmit}
                            className="login-form"
                        >
                            <VscAccount className="login-icon" />
                            <Select
                                options={users}
                                className="select"
                                onChange={this.handleChange}
                            />
                            <button className="btn">Sign in</button>
                        </form>
                    </div>
                ) : <Redirect to="/"/>}
            </>
        );
    }
}

const mapStateToProps = ({ users = {}, authedUser }) => ({
    authedUser,
    users: Object.keys(users).map((id) => ({
        value: id,
        label: (
            <div className="login-option">
                <img src={users[id].avatarURL} alt="avatar" />
                <span>{users[id].name}</span>
            </div>
        ),
    })),
});
export default connect(mapStateToProps)(LoadingPage);
