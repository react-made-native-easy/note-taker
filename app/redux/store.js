import {createStore/* ,compose, applyMiddleware*/} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

// const composedEnhancer = compose(applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware), ...enhancerList);

const initStore = () => createStore(rootReducer, {} /* , composedEnhancer*/);

module.exports = {
  initStore
};
