import { ADD_TASK, CLEAR_LIST, REMOVE_TASK } from "./actions";
export default function reducer (state, action) {
  switch (action.type) {
    case ADD_TASK:
      if (state.includes(action.fieldValue)) return state;
      return [...state, action.fieldValue];
    case REMOVE_TASK:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case CLEAR_LIST:
      return [];
    default:
      console.log("Didn't understand", action);
      return state;
  }
}