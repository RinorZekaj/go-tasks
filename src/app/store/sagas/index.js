import { take, put, select, all } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

import { REQUEST_TASK_CREATION } from '../actions/actionsTypes'
import { createTask } from '../actions/Tasksactions'

export function* taskCreationSagaNew() {
  while (true) {
    const { groupID } = yield take(REQUEST_TASK_CREATION);
    const onwerID = "U1";
    const taskID = uuid();
    yield put(createTask(taskID, groupID, onwerID));
    console.log("got group Id", groupID);
  }
}

