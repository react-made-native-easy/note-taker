import {ADD_NOTE, POPULATE_NOTES} from '../actions/index.actions';

const notes = (state = [], action) => {
  switch (action.type) {
  case ADD_NOTE: {
    return [action.payload, ...state];
  }
  case POPULATE_NOTES: {
    return action.payload.reverse();
  }
  default:
    return state;
  }
};

export default notes;
