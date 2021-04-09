import { React, Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import RedirectLogin from "./RedirectLogin";

class NewQuestion extends Component {
    state = {
        option1: "",
        option2: "",
        redirect: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { option1, option2 } = this.state;
        if (!option1.trim()) return alert("option one can't be empty");
        if (!option2.trim()) return alert("option two can't be empty");
        dispatch(handleAddQuestion(option1, option2));
        this.setState({
            option1: "",
            option2: "",
            redirect: true,
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    render() {
        if (this.state.redirect) return <Redirect to="/" />;
        return (
            <RedirectLogin>
                <div className="dashboard leaderboard">
                    <div className="new-question">
                        <div className="new-question-header">
                            Create New Question
                        </div>
                        <form
                            className="new-question-form"
                            onSubmit={this.handleSubmit}
                        >
                            <label>Would you rather...</label>
                            <input
                                type="text"
                                id="option1"
                                placeholder="option one"
                                maxLength="50"
                                onChange={this.handleChange}
                            />
                            <label id="or">Or</label>
                            <input
                                type="text"
                                id="option2"
                                placeholder="option two"
                                maxLength="50"
                                onChange={this.handleChange}
                            />
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </RedirectLogin>
        );
    }
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(NewQuestion);
