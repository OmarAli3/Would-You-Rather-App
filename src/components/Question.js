import { React, Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
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
                    <button className="btn">View datails</button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = ({ questions, authedUser, users }, {id}) => {
    if (!questions || !authedUser || !users) return { question: null };
    return {
        question: formatQuestion(
            questions[id],
            users[questions[id].author],
            authedUser
        ),
    };
};
export default connect(mapStateToProps)(Question);
