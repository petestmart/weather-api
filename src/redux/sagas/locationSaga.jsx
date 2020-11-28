import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Send location to location.router
function* getLocation(action) {

    try {
        const locationResponse = yield axios.get(`/api/location?tag=${action.payload}`)
        yield put({ type: 'SET_WEATHER_DATA', payload: locationResponse.data })
    } catch (error) {
        console.log('error in getLocation Saga', error);
    }
} // end getKeyword Sag

// Watcher Saga
function* newNamesSaga() {
    yield takeLatest('SEARCH_LOCATION', getLocation)
    // yield takeLatest('SEARCH_FUNCTION', getFunction)
    // yield takeLatest('SAVE_NAME', postName)
    // yield takeLatest('FETCH_PROJECT', fetchProjectsFetchNames)
    // yield takeLatest('REMOVE_PROJECT', removeProject)
    // yield takeLatest('FETCH_NAMES', getSavedNames)
    // yield takeLatest('REMOVE_SAVED_NAME', removeSavedName)
} // end Watcher Saga newNamesSaga



export default newNamesSaga