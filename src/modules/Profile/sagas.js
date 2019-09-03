import { takeEvery, put, fork } from "redux-saga/effects";
import { submitProfile, setProfile, removeProfile } from "./actions";
import { save } from "../../localstorage";

function* setProfileUser() {
  yield takeEvery(submitProfile, function*(action) {
    yield put(setProfile(action.payload));
    save("profile", action.payload);
  });
}

function* removeProfileUser() {
  yield takeEvery(removeProfile, function*() {
    yield put(setProfile(''));
    save("profile", '');
  });
}


export default function*() {
  yield fork(setProfileUser);
  yield fork(removeProfileUser);
}
