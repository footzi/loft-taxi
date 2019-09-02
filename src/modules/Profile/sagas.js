import { takeEvery, put, fork } from "redux-saga/effects";
import { submitProfile, setProfile } from "./actions";
import { save } from "../../localstorage";

function* setProfileUser() {
  yield takeEvery(submitProfile, function*(action) {
    yield put(setProfile(action.payload));
    save("profile", action.payload);
  });
}

export default function*() {
  yield fork(setProfileUser);
}
