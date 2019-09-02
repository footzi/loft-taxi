import { handleActions } from 'redux-actions';
import { setProfile } from './actions';
import { load } from '../../localstorage';

const profile = handleActions(
  {
  [setProfile]: (_state, action) => action.payload,
  },
  load('profile')
);

export default profile;

export const getProfile = state => state.profile;