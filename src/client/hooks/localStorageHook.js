import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || initialValue
  );
  useEffect(() => {
    const onStorageChange = (event) => setValue(event.newValue);
    window.addEventListener("storage", onStorageChange);
    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [value]);

  const updateValue = (newValue) => {
    window.localStorage.setItem(key, newValue);

    let event = new Event("storage");
    event.newValue = newValue;
    window.dispatchEvent(event);
  };

  return [JSON.parse(value), updateValue];
};

export default useLocalStorage;
