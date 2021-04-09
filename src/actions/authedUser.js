export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export const setAuthedUser = (id) => ({
    type: SET_AUTHED_USER,
    id,
});

export const removeAuthedUser = (id) => ({
    type: REMOVE_AUTHED_USER,
    id,
});
