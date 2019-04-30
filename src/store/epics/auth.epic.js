import { ofType, combineEpics } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

import storage from 'lib/storage';
import { setCookie } from 'lib/cookie';
import * as auth from 'store/actions/auth.action';
import * as authAPI from 'store/apis/auth.api';

const postLoginRequestEpic = action$ =>
  action$.pipe(
    ofType(auth.POST_LOGIN_REQUEST),
    mergeMap(action =>
      authAPI
        .postLogin$({ email: action.email, password: action.password })
        .pipe(
          map(response => {
            console.log('postLoginRequestEpic', { response });
            if (response.response.auth) {
              setCookie('auth_token', response.response.token, 2);
            }
            return auth.postLoginSuccess(response);
          }),
        ),
    ),
  );
const getAuthCheckRequestEpic = action$ =>
  action$.pipe(
    ofType(auth.GET_AUTH_CHECK_REQUEST),
    mergeMap(action =>
      authAPI.getAuthCheck$().pipe(
        map(response => {
          console.log(`getAuthCheckRequestEpic`, { response });
          return auth.getAuthCheckSuccess(response);
        }),
      ),
    ),
  );

export default combineEpics(postLoginRequestEpic, getAuthCheckRequestEpic);
