import * as SecureStore from "expo-secure-store";

export const saveToLocalStorage = async (key: string, value: any) => {
  await SecureStore.setItemAsync(key, value);
};

export const getFromLocalStorage = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  return result;
};

export const deleteFromLocalStorage = async (key: string) => {
  let result = await SecureStore.deleteItemAsync(key);
  return result;
};
