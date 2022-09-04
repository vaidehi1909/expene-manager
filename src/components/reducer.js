import * as actions from "./constant";

export const initialState = { expenseList: {} };

const reducer = (state = initialState, action) => {
  const userList = getUserList(state, action);
  switch (action.type) {
    case actions.ACTION_ADD_EXPENSE:
      const newList = userList
        ? [...userList, action.payload]
        : [action.payload];
      const newExpenseList = {
        ...state.expenseList,
        [`${action.payload.user_id}`]: newList,
      };
      return { ...state, expenseList: newExpenseList };

    case actions.ACTION_DELETE_EXPENSE:
      const filteredList = userList.filter(
        (ul) => ul.expense_id != action.payload.expense_id
      );
      const filterdExpenseList = {
        ...state.expenseList,
        [`${action.payload.user_id}`]: filteredList,
      };
      return {
        ...state,
        expenseList: filterdExpenseList,
      };
  }
  return state;
};

const getUserList = (state, action) => {
  return state.expenseList[`${action.payload.user_id}`];
};

export default reducer;
