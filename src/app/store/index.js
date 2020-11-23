import { createStore, applyMiddleware, combineReducers } from "redux";
import { tasksReducer } from "./reducers/tasksReducer";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/sagas";
import { groupsReducer } from "./reducers/groupsReducer";
import { commentsReducer } from './reducers/commentsReducer'  
import { usersReducer } from "./reducers/usersReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    tasks: tasksReducer,
    groups: groupsReducer,
    comments: commentsReducer,
    users: usersReducer
})

export const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga)