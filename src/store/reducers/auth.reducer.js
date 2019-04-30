import * as auth from 'store/actions/auth.action';

export const initialState = {};

let nextData = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case auth.POST_LOGIN_REQUEST:
      nextData = { ...state };
      return nextData;
    case auth.POST_LOGIN_SUCCESS:
      nextData = { ...state };
      return nextData;
    case auth.POST_LOGIN_FAILURE:
      nextData = { ...state };
      return nextData;
    case auth.POST_LOGIN_REQUEST:
      nextData = { ...state };
      return nextData;
    case auth.POST_LOGIN_SUCCESS:
      nextData = { ...state };
      return nextData;
    case auth.POST_LOGIN_FAILURE:
      nextData = { ...state };
      return nextData;
    default:
      return state;
  }
};
