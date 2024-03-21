import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Replace with your actual reducer
import watchMySaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );
// export default store;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchMySaga); // Run your saga
export default store;