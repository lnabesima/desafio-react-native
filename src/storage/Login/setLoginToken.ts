import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_COLLECTION } from '@storage/storageConfig';

export async function setLoginToken(token: string) {
  try {
    console.log(token);
    await AsyncStorage.setItem(LOGIN_COLLECTION, JSON.stringify(token));
  } catch (error) {
    throw error;
  }
}