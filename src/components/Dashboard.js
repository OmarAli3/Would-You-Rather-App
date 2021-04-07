import { React, Component } from "react";
class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <nav className="question-nav">
                    <ul>
                        <li>Unanswered Questions</li>
                        <li>Answered Questions</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Dashboard;
