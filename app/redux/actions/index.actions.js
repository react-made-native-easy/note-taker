import {createAction} from 'redux-actions';

export const TEST_ACTION = 'TEST_ACTION';
export const SET_TEXT = 'SET_TEXT';
export const SET_TITLE = 'SET_TITLE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ADD_NOTE = 'ADD_NOTE';


export const setTitle = createAction(SET_TITLE);
export const addNote = createAction(ADD_NOTE);
/* This is equivalent to
export const setTitle = (payload) => {
  return {
    type: SET_TITLE,
    payload: payload
  };
};
*/
export const setText = createAction(SET_TEXT);
export const changeLanguage = createAction(CHANGE_LANGUAGE);
