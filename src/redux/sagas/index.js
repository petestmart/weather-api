import { all } from 'redux-saga/effects';
import FCSaga from './FCSaga';
import locationSaga from './locationSaga';

export default function* rootSaga() {
  yield all([
    FCSaga(),
    locationSaga(),
  ]);
}
