import { useCallback, useEffect, useState } from "react";

type SetValue<T> = (newValue: T | ((prev: T) => T)) => void;

function useLocalStorage<T>(key: string, initialValue?: T) {
  const getStoredValue = useCallback(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (err) {
        console.warn(
          `Не удалось полуить данные из кеша браузера по ключу "${key}":`,
          err,
        );
      }
    }

    return initialValue;
  }, [key, initialValue]);

  const [value, setValue] = useState<T>(getStoredValue);

  const setStoredValue: SetValue<T> = useCallback(
    (newValue) => {
      setValue((prev) => {
        const resolved =
          typeof newValue === "function"
            ? (newValue as (prev: T) => T)(prev)
            : newValue;

        localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key],
  );

  const handleStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    },
    [key, initialValue],
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [handleStorageChange]);

  return { value, setStoredValue };
}

export default useLocalStorage;
