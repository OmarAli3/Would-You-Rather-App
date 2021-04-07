export const formatQuestion = (question, author, authedUser) => {
    const { id, optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    const answerIds = authedUser ? Object.keys(authedUser.answers) : [];
    const answers = authedUser ? authedUser.answers : {};
    const hasVoted = answerIds.includes(id);
    return {
        name,
        id,
        avatarURL,
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
