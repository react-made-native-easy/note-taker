import {AsyncStorage} from 'react-native';

const keys = {
  'NOTES': 'notes'
};

const get = (storageKey) => AsyncStorage.getItem(storageKey).then((json) => json ? JSON.parse(json) : {});

const set = (storageKey, data) => AsyncStorage.setItem(storageKey, JSON.stringify(data));

const addNote = async (newNote) => {
  const localNotes = await get(keys.NOTES);
  const newNotes = [...localNotes, newNote];
  return set(keys.NOTES, newNotes);
};

const clear = AsyncStorage.clear;

module.exports = {
  keys,
  set,
  get,
  addNote,
  clear
};
