import { take, put, select, all } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";

import {
  REQUEST_TASK_CREATION,
  SET_TASK_NAME,
  SET_TASK_GROUP,
  SET_TASK_COMPLETE,
} from "../actions/actionsTypes";
import { createTask } from "../actions/Tasksactions";

const url = "http://localhost:8888";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(REQUEST_TASK_CREATION);
    const onwerID = "U1";
    const taskID = uuid();
    yield put(createTask(taskID, groupID, onwerID));
    console.log("got group Id", groupID);
    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskID,
        group: groupID,
        onwer: onwerID,
        isComplete: false,
        name: "New task",
      },
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([SET_TASK_NAME, SET_TASK_GROUP, SET_TASK_COMPLETE]);
    axios.put(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete,
      },
    });
  }
}

export default function* rootSaga() {
  yield all([taskCreationSaga()]);
}
