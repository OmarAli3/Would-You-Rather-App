import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
    handleViewDetails = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/question/${id}`);
    };
    render() {
        const { question } = this.props;
        return (
            <li className="question">
                <div className="question-header">{`${question.name} asks,`}</div>
                <div className="question-avatar">
                    <img src={question.avatarURL} alt="avatar" />
                </div>
                <div className="question-options">
                    <span>
                        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}
                    </span>
                    <button
                        className="btn"
                        onClick={(e) => this.handleViewDetails(e, question.id)}
                    >
                        View datails
                    </button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
    if (!questions || !authedUser || !users) return { question: null };
    return {
        question: formatQuestion(
            questions[id],
            users[questions[id].author],
            authedUser
        ),
    };
};
export default withRouter(connect(mapStateToProps)(Question));
