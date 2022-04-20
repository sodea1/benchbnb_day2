import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currUser) => ({
  type: RECEIVE_CURRENT_USER,
  currUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const loginUser = user => dispatch => {
  login(user).then(data => dispatch(receiveCurrentUser(data)));
};

export const logoutUser = user => dispatch => {
  logout().then(() => dispatch(logoutCurrentUser()));
};

export const signupUser = user => dispatch => {
  signup(user).then(data => dispatch(receiveCurrentUser(user)));
};