import AsyncStorage from '@react-native-async-storage/async-storage';
import { USERS_COLLECTION } from '@storage/storageConfig';

export async function getStoredUsers() {
  try {
    const storedUsers = await AsyncStorage.getItem(USERS_COLLECTION);
    const sanitizedUsers = storedUsers ? JSON.parse(storedUsers) : [];
    return sanitizedUsers;
  } catch (error) {
    throw error;
  }
}