import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';

export default combineReducers({
  test,
  content
});
