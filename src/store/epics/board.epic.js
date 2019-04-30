import { ofType, combineEpics } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

import { setCookie } from 'lib/cookie';
import * as board from 'store/actions/board.action';
import * as boardAPI from 'store/apis/board.api';

const getBoardListFromEmailRequestEpic = action$ =>
  action$.pipe(
    ofType(board.GET_BOARD_LIST_FROM_EMAIL_REQUEST),
    mergeMap(action =>
      boardAPI.getBoardListFromEmail$({ email: action.email }).pipe(
        map(response => {
          console.log('getBoardListFromEmailRequestEpic', { response });
          return board.getBoardListFromEmailSuccess(response);
        }),
      ),
    ),
  );

export default combineEpics(getBoardListFromEmailRequestEpic);
