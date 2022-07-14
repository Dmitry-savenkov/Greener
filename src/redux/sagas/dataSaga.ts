// Lib
import { takeEvery, put, select } from 'redux-saga/effects';

// Actions
import { AddItemToCard } from '../actions/user';

export function* userDataLoadSaga({ payload }) {}

function* dataSaga() {
  yield takeEvery(AddItemToCard, userDataLoadSaga);
}

export default dataSaga;
