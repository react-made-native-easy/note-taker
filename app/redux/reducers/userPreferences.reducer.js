import {CHANGE_LANGUAGE} from '../actions/index.actions';
import {getCurrentLocale} from '../../utils/language.utils';

const initialState = {language: getCurrentLocale()};

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_LANGUAGE: {
    return {...state, language: action.payload};
  }
  default:
    return state;
  }
};

export default userPreferences;
