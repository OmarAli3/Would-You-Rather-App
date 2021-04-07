export const fromatQuestion = (question, author, authedUser) => {
    const { id, timestamp, optionOne, optionTwo } = question;
    const { name, avatarUrl } = author;
    const { answers } = authedUser;
    const hasVoted = Object.keys(answers).includes(id);
    return {
        name,
        id,
        timestamp,
        avatarUrl,
        optionOne: {
            votes: optionOne.votes.length,
            text: optionOne.text,
        },
        optionTwo: {
            votes: optionTwo.votes.length,
            text: optionTwo.text,
        },
        hasVoted,
        authedUserVote: hasVoted ? answers[id] : "",
    };
};
