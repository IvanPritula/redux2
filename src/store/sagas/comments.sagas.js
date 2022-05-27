import {  call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/index';
import { commentsActionSucsess,commentsActionErorr} from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';


export function* createComments(action) {
    try {
        const result = yield call(api.commetsApi, action.payload);
        yield put(commentsActionSucsess(result));
    } catch (error) {
        yield put(commentsActionErorr(error));
    }
}


function* commetsSaga(){
    yield takeLatest(actionTypes.COMMENTS_REQUEST,createComments)
}

export default commetsSaga;