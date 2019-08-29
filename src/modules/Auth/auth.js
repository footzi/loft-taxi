// Реализуйте редьюсер
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { setAuth, removeAuth } from './actions';

const auth = handleActions(
  {
    [setAuth]: (_state, action) => action.payload
  },
  ''
);

export default combineReducers({
  auth
});

// export const getIsAuthorized = state => (state.auth.apiKey ? true : false);
// export const getApiKey = state => state.auth.apiKey;
