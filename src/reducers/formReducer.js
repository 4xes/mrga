import {
  SELECT_USER,
  START_PROCESS,
  IN_PROGRESS,
  SHOW_RESULT,
  ERROR_PROCESS
} from '../actions/Actions.js'


function reduceActions(state = {}, action) {
  switch (action.type) {
    case ERROR_PROCESS:
      return {
        userId: state.userId,
      };
    case SELECT_USER:
      return {
        userId: action.userId,
      };
    case START_PROCESS:
      return {
        userId: state.userId,
      };
    case IN_PROGRESS:
      return {
        userId: state.userId,
        isBusy: true
      };
    case SHOW_RESULT:
      return Object.assign({}, state, action.data);
    default:
      return state
  }
}

export default reduceActions;