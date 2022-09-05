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

    case actions.ACTION_UPDATE_EXPENSE:
      const updatedList = userList.reduce((acc, ul) => {
        if (action.payload.expense_id === ul.expense_id) {
          acc.push(action.payload);
        } else {
          acc.push(ul);
        }
        return acc;
      }, []);
      const upadtedExpenseList = {
        ...state.expenseList,
        [`${action.payload.user_id}`]: updatedList,
      };
      return {
        ...state,
        expenseList: upadtedExpenseList,
      };
    default:
      return state;
  }
};

const getUserList = (state, action) => {
  return state.expenseList[`${action.payload.user_id}`];
};

export default reducer;
