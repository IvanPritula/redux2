import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import commetsSaga from './comments.sagas';


export const sagaMiddleware = createSagaMiddleware()

// root reducer
export function* rootSaga() {
    yield all([
        commetsSaga(),
    ])
}
