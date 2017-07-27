import { call, put, take } from "redux-saga/effects";
//import {fetchImages} from '../api/app';
//import * as types from '../actions';

//test api
const fetchInbox = [
  { text : "Привет, как дела?"},
  { text: "нормально, а у тебя? Как работа?" },
  { text: "Привет телепень" }
];

export function* loadInbox() {
  try {
    //const images = yield call(fetchImages);
    const inbox = fetchInbox;
    yield put({type: 'INBOX_RECEIVED', inbox});
  } catch (error) {
    yield put({type: 'LOAD_INBOX_FAILURE', error})
  }
}

export function* watchLoadInbox() {
  while (true) {
    yield take('LOAD_INBOX');
    yield call(loadInbox);
  }
}
