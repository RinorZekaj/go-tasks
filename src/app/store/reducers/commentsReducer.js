import { initialState } from "../../../server/initialState";

export const commentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
