export const useCustomLocalStorage = (name: string, initialValue: any) => {
  const localStorageValue = useLocalStorage(name, initialValue, {
    initOnMounted: true,
  });

  const getValue = computed<any>(() => localStorageValue.value);

  const setValue = (value: any): void => {
    localStorageValue.value = value;
  };

  const removeLocalStorage = (): void => {
    localStorage.removeItem(name);
  };

  return { getValue, setValue, removeLocalStorage };
};
