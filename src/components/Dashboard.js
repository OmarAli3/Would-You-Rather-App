import { React, Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
    state = {
        answeredList: false,
    };
    handleDisplayedList = (answeredList) => this.setState({ answeredList });

    render() {
        return (
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
                              <li key={id}>{id}</li>
                          ))
                        : this.props.unansweredQuetionIds.map((id) => (
                              <li key={id}>{id}</li>
                          ))}
                </ul>
            </div>
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
            .sort((a, b) => questions[a].timestamp - questions[b].timestamp),
    };
};

export default connect(mapStatetToProps)(Dashboard);