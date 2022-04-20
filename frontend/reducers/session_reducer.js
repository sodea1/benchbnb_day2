import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
  RECEIVE_ERRORS 
} from "../actions/session_actions";


const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      const currentUser = action.user;
      return Object.assign({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_ERRORS:

    default:
      return state;
  }
};

export default sessionReducer;