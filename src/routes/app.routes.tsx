import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import { Users } from '@screens/Users';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}>
      <Screen name={'login'} component={Login}/>
      <Screen name={'users'} component={Users}/>
    </Navigator>
  );
}