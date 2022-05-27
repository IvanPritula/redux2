import { combineReducers } from 'redux';
import { commentsReducer } from './comments.reducer';

// последовательно каждый редюсер
export const globalReducer = combineReducers({
  comments:commentsReducer
});