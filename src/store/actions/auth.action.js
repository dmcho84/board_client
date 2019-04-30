// 로그인
export const POST_LOGIN_REQUEST = '@auth/POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = '@auth/POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = '@auth/POST_LOGIN_FAILURE';
export const postLoginRequest = (email, password) => ({
  type: POST_LOGIN_REQUEST,
  email,
  password,
});
export const postLoginSuccess = payload => ({
  type: POST_LOGIN_SUCCESS,
  payload,
});
export const postLoginFailure = payload => ({
  type: POST_LOGIN_FAILURE,
  payload,
});

// 인증 확인
export const GET_AUTH_CHECK_REQUEST = '@auth/GET_AUTH_CHECK_REQUEST';
export const GET_AUTH_CHECK_SUCCESS = '@auth/GET_AUTH_CHECK_SUCCESS';
export const GET_AUTH_CHECK_FAILURE = '@auth/GET_AUTH_CHECK_FAILURE';
export const getAuthCheckRequest = payload => ({
  type: GET_AUTH_CHECK_REQUEST,
  payload,
});
export const getAuthCheckSuccess = payload => ({
  type: GET_AUTH_CHECK_SUCCESS,
  payload,
});

export const getAuthCheckFailure = payload => ({
  type: GET_AUTH_CHECK_FAILURE,
  payload,
});
