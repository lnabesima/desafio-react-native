import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from '@routes/app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRouter/>
    </NavigationContainer>
  );
}