import { CHANGE_CURRENT_NOTE } from "./actionTypes";

export const changeCurrentNote = note => ({
  type: CHANGE_CURRENT_NOTE,
  currentNote: note
});
