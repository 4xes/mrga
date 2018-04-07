import { combineReducers } from 'redux'


import {
  SELECT_USER,
  START_PROCESS,
  IN_PROGRESS,
  SHOW_RESULT
} from '../actions/Actions.js'


function reduceActions(state = {}, action) {
  switch (action.type) {
    case SELECT_USER:
      return {
        userId: action.userId,
      };
    case START_PROCESS:
      return Object.assign({}, state, {
        progressId: action.url,
      });
    case IN_PROGRESS:
      return Object.assign({}, state, {
        progressId: action.processId,
      });

    case SHOW_RESULT:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reduceActions
});

export default rootReducer