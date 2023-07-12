import { UserCardProps } from '@components/UserCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USERS_COLLECTION } from '@storage/storageConfig';

export async function setStoredUsers(usersArray: UserCardProps[]) {
  try {
    await AsyncStorage.setItem(USERS_COLLECTION, JSON.stringify(usersArray));
  } catch (error) {
    throw error;
  }
}