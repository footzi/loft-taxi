import { takeEvery, put, fork } from "redux-saga/effects";
import { submitLogin, setAuth } from "./actions";
import { save } from "../../localstorage";

function* setAuthorization() {
  yield takeEvery(submitLogin, function*() {
    yield put(setAuth(true));
    save("auth", true);
  });
}

export default function*() {
  yield fork(setAuthorization);
}
