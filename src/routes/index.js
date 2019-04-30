import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return <div>로딩중...</div>;
};

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});
export const Board = Loadable({
  loader: () => import('./Board'),
  loading: Loading,
});
export const BoardEmail = Loadable({
  loader: () => import('./Board.email'),
  loading: Loading,
});

export const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});
