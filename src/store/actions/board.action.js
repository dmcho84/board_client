// 로그인
export const GET_BOARD_LIST_FROM_EMAIL_REQUEST =
  '@auth/GET_BOARD_LIST_FROM_EMAIL_REQUEST';
export const GET_BOARD_LIST_FROM_EMAIL_SUCCESS =
  '@auth/GET_BOARD_LIST_FROM_EMAIL_SUCCESS';
export const GET_BOARD_LIST_FROM_EMAIL_FAILURE =
  '@auth/GET_BOARD_LIST_FROM_EMAIL_FAILURE';
export const getBoardListFromEmailRequest = email => ({
  type: GET_BOARD_LIST_FROM_EMAIL_REQUEST,
  email,
});
export const getBoardListFromEmailSuccess = payload => ({
  type: GET_BOARD_LIST_FROM_EMAIL_SUCCESS,
  payload,
});
export const getBoardListFromEmailFailure = payload => ({
  type: GET_BOARD_LIST_FROM_EMAIL_FAILURE,
  payload,
});
