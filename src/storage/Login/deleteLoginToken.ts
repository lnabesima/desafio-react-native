import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_COLLECTION } from '@storage/storageConfig';

export async function deleteLoginToken() {
  try {
    return await AsyncStorage.removeItem(LOGIN_COLLECTION);
  } catch (error) {
    throw error;
  }
}