import actionTypes from "../actions/actionTypes";

const commentsState = {
    list: [],
   isLoading: false,
   error: null,
}

export const commentsReducer = (oldState = commentsState, action) => {
    switch(action.type) {
        case actionTypes.COMMENTS_REQUEST: {
            return  {
                ...oldState,
                isLoading: true,
            }
        }
        case actionTypes.COMMENTS_SUCSESS: {
            return  {
                ...oldState,
                isLoading: false,
                list:[...oldState.list,action.payload],
            }
        }
        case actionTypes.COMMENTS_ERORR: {
            return {
                ...oldState,
                isLoading: false,
                error: action.payload,
            }
        }
        default: {
            return oldState;
        }
    }
}