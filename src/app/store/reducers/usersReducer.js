import { initialState } from "../../../server/initialState";

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
