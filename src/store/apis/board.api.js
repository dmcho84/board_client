import { GET, POST, pathMaster } from 'lib/ajax';

const boardPath = pathMaster('/api/board');

// export const postLogin$ = ({ email, password }) =>
//   POST(boardPath('/local/login'), { email, password });

export const getBoardListFromEmail$ = ({ email }) =>
  GET(boardPath('/list', [{ key: 'email', value: email }]));
