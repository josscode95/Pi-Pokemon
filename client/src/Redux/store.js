import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' 
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f
//   )
// );

export default store;