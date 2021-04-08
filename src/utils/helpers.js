export const formatQuestion = (question, author, authedUser) => {
    const { id, optionOne, optionTwo } = question;
    const { name, avatarURL } = author;
    let answer = "";
    let hasVoted = false;
    if (optionOne.votes.includes(authedUser)) {
        answer = "optionOne";
        hasVoted = true;
    }
    if (optionTwo.votes.includes(authedUser)) {
        answer = "optionTwo";
        hasVoted = true;
    }
    console.log(hasVoted)
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
        authedUserVote: answer,
    };
};

export const formatUsers = (users) =>
    users
        ? Object.keys(users).map((id) => {
              const answeredQuestions = Object.keys(users[id].answers).length;
              const createdQuestions = users[id].questions.length;
              return {
                  id,
                  name: users[id].name,
                  avatarURL: users[id].avatarURL,
                  answeredQuestions,
                  createdQuestions,
                  score: answeredQuestions + createdQuestions,
              };
          })
        : [];
