import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers from 'store/reducers';
import epics from 'store/epics';

const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

epicMiddleware.run(epics);
