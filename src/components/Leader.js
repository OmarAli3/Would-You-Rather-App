import { React } from "react";

const Leader = (props) => {
    const prize = props.prize ? props.prize : "";
    return (
        <li className="leader">
            <img src={props.avatarURL} alt="avatar" />
            <div className="leader-info">
                <span className="info1">{props.name}</span>
                <span className="info2">Answered Questions</span>
                <span className="info3">{props.answeredQuestions}</span>
                <span className="info4">Created Questions</span>
                <span className="info5">{props.createdQuestions}</span>
            </div>
            <div className="score">
                <span className="score-header">Score</span>
                <span className={`score-number ${prize}`}>{props.score}</span>
            </div>
        </li>
    );
};

export default Leader;
