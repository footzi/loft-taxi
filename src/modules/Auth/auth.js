import { handleActions } from 'redux-actions';
import { setAuth } from './actions';
import { load } from '../../localstorage';

const auth = handleActions(
  {
  [setAuth]: (_state, action) => action.payload,
  },
  load('auth')
);

export default auth;

export const getIsAuthorized = state => state.auth;
