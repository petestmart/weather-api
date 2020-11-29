import { put, takeLatest } from 'redux-saga/effects';


function* saveFahrenheitState(action) {
    try {
        yield put({ type: 'SAVE_FAHRENHEIT_STATE', payload: action})
    } catch (error) {
        console.log('Error with Save FahrenheitState Saga: ', error);
    }
    
} // end saveFahrenheitState

// Watcher Saga
function* FCSaga() {
    yield takeLatest('SET_FAHRENHEIT_STATE', saveFahrenheitState)
} // end Watcher Saga newNamesSaga

export default FCSaga;