import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_COLLECTION } from '@storage/storageConfig';

export async function getLoginToken() {
  try {
    return await AsyncStorage.getItem(LOGIN_COLLECTION);
  } catch (error) {
    throw error;
  }
};