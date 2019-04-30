import { combineEpics } from 'redux-observable';

import authEpic from './auth.epic';
import boardEpic from './board.epic';

export default combineEpics(authEpic, boardEpic);
