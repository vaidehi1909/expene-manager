import * as actions from "./constant";

export const initialState = { expenseList: [], categoryList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACTION_ADD_EXPENSE:
      return { ...state, expenseList: [...state.expenseList, action.payload] };

    case actions.ACTION_DELETE_EXPENSE:
      const filteredList = state.expenseList.filter(
        (ul) => ul.expense_id != action.payload.expense_id
      );
      return {
        ...state,
        expenseList: filteredList,
      };

    case actions.ACTION_UPDATE_EXPENSE:
      const updatedList = state.expenseList.reduce((acc, ul) => {
        if (action.payload.expense_id === ul.expense_id) {
          acc.push(action.payload);
        } else {
          acc.push(ul);
        }
        return acc;
      }, []);

      return {
        ...state,
        expenseList: updatedList,
      };
    default:
      return state;
  }
};

export default reducer;
