import { React, Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import RedirectLogin from "./RedirectLogin";

class Dashboard extends Component {
    state = {
        answeredList: false,
    };
    handleDisplayedList = (answeredList) => this.setState({ answeredList });

    render() {
        return (
            <RedirectLogin>
                <div className="dashboard">
                    <nav className="question-nav">
                        <ul>
                            <li
                                onClick={() => this.handleDisplayedList(false)}
                                className={
                                    this.state.answeredList ? "" : "active-li"
                                }
                            >
                                Unanswered Questions
                            </li>
                            <li
                                onClick={() => this.handleDisplayedList(true)}
                                className={
                                    this.state.answeredList ? "active-li" : ""
                                }
                            >
                                Answered Questions
                            </li>
                        </ul>
                    </nav>
                    <ul className="dashboard-list">
                        {this.state.answeredList
                            ? this.props.answeredQuetionIds.map((id) => (
                                  <Question key={id} id={id} />
                              ))
                            : this.props.unansweredQuetionIds.map((id) => (
                                  <Question key={id} id={id} />
                              ))}
                    </ul>
                </div>
            </RedirectLogin>
        );
    }
}

const mapStatetToProps = ({ questions, authedUser, users }) => {
    const answers = authedUser ? Object.keys(users[authedUser].answers) : [];
    return {
        answeredQuetionIds: answers.sort(
            (a, b) => questions[a].timestamp - questions[b].timestamp
        ),
        unansweredQuetionIds: Object.keys(questions)
            .filter((id) => !answers.includes(id))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    };
};

export default connect(mapStatetToProps)(Dashboard);
