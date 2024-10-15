import { objectTask } from "../Interfaces/Interfaces";

export const AppReducer = (state: objectTask[], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "DELETE_TASK":
      return state.filter((task) => task.id != action.id);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id == action.id ? { ...task, checked: !task.checked } : task
      );
    default:
      return state;
  }
};
