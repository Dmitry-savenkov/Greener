// Lib
import { fork } from 'redux-saga/effects';

// Sagas
import dataSaga from './dataSaga';

function* mainSaga() {
  yield fork(dataSaga);
}

export default mainSaga;
