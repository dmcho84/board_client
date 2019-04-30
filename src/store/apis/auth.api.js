import { GET, POST, pathMaster } from 'lib/ajax';

const authPath = pathMaster('/api/auth');

export const postLogin$ = ({ email, password }) =>
  POST(authPath('/local/login'), { email, password });

export const getAuthCheck$ = () => GET(authPath('/local/check'));
