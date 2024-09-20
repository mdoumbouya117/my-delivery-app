import { useState, useEffect } from "react";

export const useStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue(value);

    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue] as const;
};
