import { CHANGE_CURRENT_NOTE } from "../Actions/actionTypes";

const initialState = {
  currentNote: { noteName: "", cents: "", freq: "", octave: "" }
};

export const NoteListener = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.currentNote
      };
    default:
      return state;
  }
};
