import { React, Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { handleAddAnswer } from "../actions/questions";

class QuestionPage extends Component {
    state = {
        option: "",
    };
    handleChange = (e) => {
        e.target.checked &&
            this.setState({
                option: e.target.value,
            });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { option } = this.state;
        const { dispatch, question } = this.props;
        if (!option) return alert("please, select an option!");
        dispatch(handleAddAnswer(question.id, option));
    };
    render() {
        const { question } = this.props;
        if (!question) return <></>;
        const totalVotes =
            question.optionOne.votes + question.optionTwo.votes || 1;
        const vote = question.authedUserVote;
        return (
            <div className="dashboard leaderboard">
                <li className="question">
                    <div className="question-header">
                        {question.hasVoted
                            ? `Asked by ${question.name}`
                            : `${question.name} asks,`}
                    </div>
                    <div className="question-avatar">
                        <img src={question.avatarURL} alt="avatar" />
                    </div>
                    <div className="question-options">
                        {question.hasVoted ? (
                            <>
                                <strong>Results :</strong>
                                <span
                                    className={`option-one ${
                                        vote === "optionOne" ? "voted" : ""
                                    }`}
                                >
                                    <span></span>
                                    {question.optionOne.text}
                                    <div className="progress-bar">
                                        <div
                                            className="light-voted"
                                            style={{
                                                width: `${
                                                    (question.optionOne.votes /
                                                        totalVotes) *
                                                    100
                                                }%`,
                                            }}
                                        >
                                            {question.optionOne.votes}%
                                        </div>
                                    </div>
                                    {`${question.optionOne.votes} out of ${totalVotes} votes`}
                                </span>
                                <span
                                    className={`option-two ${
                                        vote === "optionTwo" ? "voted" : ""
                                    }`}
                                >
                                    <span></span>
                                    {question.optionTwo.text}
                                    <div className="progress-bar">
                                        <div
                                            className="light-voted"
                                            style={{
                                                width: `${
                                                    (question.optionTwo.votes /
                                                        totalVotes) *
                                                    100
                                                }%`,
                                            }}
                                        >
                                            {question.optionTwo.votes}%
                                        </div>
                                    </div>
                                    {`${question.optionTwo.votes} out of ${totalVotes} votes`}
                                </span>
                            </>
                        ) : (
                            <>
                                <strong>Would you rather :</strong>
                                <form
                                    className="save-option new-question-form"
                                    onSubmit={this.handleSubmit}
                                >
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value="optionOne"
                                            onChange={this.handleChange}
                                        />
                                        {question.optionOne.text}
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
                                            value="optionTwo"
                                            onChange={this.handleChange}
                                        />
                                        {question.optionTwo.text}
                                    </label>
                                    <button className="btn">Submit</button>
                                </form>
                            </>
                        )}
                    </div>
                </li>
            </div>
        );
    }
}

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    if (!questions || !authedUser || !users) return { question: null };
    const { id } = props.match.params;
    return {
        question: formatQuestion(
            questions[id],
            users[questions[id].author],
            authedUser
        ),
    };
};
export default connect(mapStateToProps)(QuestionPage);
