import authReducer, { initialState as authState } from './auth.reducer';

const initialState = {
  auth: authState,
};

export default (state = initialState, action) => ({
  auth: authReducer(state.auth, action),
});
