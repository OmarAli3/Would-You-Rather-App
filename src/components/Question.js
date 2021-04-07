import { React, Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
    componentDidMount() {
        console.log(this.props.question);
    }
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
                        {`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}`}
                    </span>
                    <button className="btn">View datails</button>
                </div>
            </li>
        );
    }
}

const mapStatetToProps = ({ questions, authedUser, users }, { id }) => ({
    question: formatQuestion(
        questions[id],
        users[questions[id].author],
        authedUser ? users[authedUser] : null
    ),
});
export default connect(mapStatetToProps)(Question);
