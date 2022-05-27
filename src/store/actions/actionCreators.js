import actionTypes from './actionTypes';

export const addCommentsAction = (payload) => ({
  type: actionTypes.COMMENTS_ADD,
  payload,
});

export const commentsActionRequest = (payload) => {
  return { type: actionTypes.COMMENTS_REQUEST, payload };
};

export const commentsActionSucsess = (payload) => {
  return { type: actionTypes.COMMENTS_SUCSESS, payload };
};

export const commentsActionErorr = (payload) => {
  return { type: actionTypes.COMMENTS_ERORR, payload };
};