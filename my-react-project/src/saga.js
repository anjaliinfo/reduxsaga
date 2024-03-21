import { put, takeLatest } from 'redux-saga/effects';

// Define your saga function
function* mySaga() {
  try {
    // Your asynchronous logic goes here
    yield put({ type: 'ACTION_SUCCESS' }); // Dispatch an action when done
  } catch (error) {
    yield put({ type: 'ACTION_FAILURE', error }); // Dispatch an error action if something goes wrong
  }
}
// Watch for a specific action and run the saga
function* watchMySaga() {
  yield takeLatest('START_ACTION', mySaga);
}
export default watchMySaga;
