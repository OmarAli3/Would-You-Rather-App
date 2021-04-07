export const RECIEVE_USERS = "RECIEVE_USERS";

export const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    users,
});
