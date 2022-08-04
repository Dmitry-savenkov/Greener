// Lib
import { takeEvery, put, select } from 'redux-saga/effects';

// Actions
import { AddItemToCard } from '../actions/cart';

export function* userDataLoadSaga({ payload }) {
  toast.show('Task finished successfully', {
    type: 'success',
    placement: 'top',
    duration: 4000,
    animationType: 'slide-in',
  });
}

function* dataSaga() {
  yield takeEvery(AddItemToCard, userDataLoadSaga);
}

export default dataSaga;
