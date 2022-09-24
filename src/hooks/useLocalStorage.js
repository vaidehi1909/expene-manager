import { useCallback, useEffect, useState } from "react";

const getStorageData = (keyName, defaultValue) => {
  try {
    const savedItem = localStorage.getItem(`${keyName}`);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

export default useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(`${keyName}`, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
};

// const [state, setState] = useLocalStorage(user_id, [])
