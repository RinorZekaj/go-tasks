import {
  REQUEST_TASK_CREATION,
  CREATE_TASK,
  SET_TASK_COMPLETE,
  SET_TASK_NAME,
  SET_TASK_GROUP,
} from "./actionsTypes";

export const requestTaskCreation = (groupID) => {
  return {
    type: REQUEST_TASK_CREATION,
    groupID,
  };
};

export const createTask = (taskID, groupID, ownerID) => {
  return {
    type: CREATE_TASK,
    taskID,
    groupID,
    ownerID,
  };
};

export const setTaskCompletion = (id, isComplete) => {
  return {
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete,
  };
};

export const setTaskName = (id, name) => {
  return {
    type: SET_TASK_NAME,
    taskID: id,
    name,
  };
};

export const setTaskGroup = (id, groupID) => {
  return {
    type: SET_TASK_GROUP,
    taskID: id,
    groupID,
  };
};
