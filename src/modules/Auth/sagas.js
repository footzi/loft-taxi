import { takeEvery, put, fork } from "redux-saga/effects";
import { submitLogin, removeAuth, setAuth } from "./actions";
import { save } from "../../localstorage";

function* setAuthorization() {
  yield takeEvery(submitLogin, function*() {
    yield put(setAuth(true));
    save("auth", true);
  });
}

function* removeAuthorization() {
  yield takeEvery(removeAuth, function*() {
    yield put(setAuth(false));
    save("auth", false);
  });
}

export default function*() {
  yield fork(setAuthorization);
  yield fork(removeAuthorization);
}
