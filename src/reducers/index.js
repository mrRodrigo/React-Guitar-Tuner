import { NoteListener } from "./NoteReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
  noteReducer: NoteListener
});
