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

/*
Local Storage Possible Uses:
 isMember - Store if the user has a memberShip
 MembershipType - Store the type of membership
 MembershipDate - Date Membership was active / usef for Membership renewall logic if MembershipType = "Supporter"
 ActivePlaylist - If we want to have the users selected playlist as the sounds to show in the home screen.
*/
