import { initialState } from "../../../server/initialState";
import { CREATE_TASK, SET_TASK_COMPLETE, SET_TASK_NAME, SET_TASK_GROUP } from "../actions/actionsTypes";

export const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        {
          id: action.taskID,
          name: "New task",
          group: action.groupID,
          owner: action.ownerID,
          isComplete: false,
        },
      ];
    case SET_TASK_COMPLETE:
      return state.map((task) =>
        task.id === action.taskID
          ? { ...task, isComplete: action.isComplete }
          : task
      );
    case SET_TASK_NAME: 
      return state.map(task => 
        task.id === action.taskID
          ? { ...task, name: action.name }
          : task
      )
    case SET_TASK_GROUP:
      return state.map(task => 
        task.id === action.taskID
          ? { ...task, group: action.groupID }
          : task
      )
    default:
      return state;
  }
};
