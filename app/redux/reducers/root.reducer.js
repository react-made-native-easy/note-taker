import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import notes from './notes.reducer';

export default combineReducers({
  test,
  content,
  notes
});
