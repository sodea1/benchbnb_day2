import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => 
  SessionApiUtil.login(user).then(data => dispatch(receiveCurrentUser(data)));

export const logout = () => dispatch => 
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch =>
  SessionApiUtil.signup(user).then(data => dispatch(receiveCurrentUser(data)));