import {SET_TEXT, SET_TITLE} from '../actions/index.actions';

const defaultState = {
  text: '',
  title: ''
};

const content = (state = defaultState, action) => {
  switch (action.type) {
  case SET_TEXT: {
    return {...state, text: action.payload};
  }
  case SET_TITLE: {
    return {...state, title: action.payload};
  }
  default:
    return state;
  }
};

export default content;
