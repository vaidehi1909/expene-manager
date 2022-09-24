import { useCallback, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useReducer(reducer, userId, initState) {
  const [state, setState] = useLocalStorage(userId, initState);

  const dispatch = useCallback(
    (action) => {
      const newState = reducer(state, action);
      setState(newState);
    },
    [setState, state]
  );

  return [state, dispatch];
}
