export const useCustomLocalStorage = <T>(name: string, initialValue: T) => {
  const localStorageValue = useLocalStorage(name, initialValue, {
    initOnMounted: true,
  });

  const getValue = computed<T>(() => localStorageValue.value);

  const setValue = (value: T): void => {
    localStorageValue.value = value;
  };

  const removeLocalStorage = (): void => {
    localStorage.removeItem(name);
  };

  return { getValue, setValue, removeLocalStorage };
};
