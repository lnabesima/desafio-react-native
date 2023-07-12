import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from '@routes/app.routes';
import { View } from 'react-native';

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: '#101726' }}>
      <NavigationContainer>
        <AppRouter/>
      </NavigationContainer>
    </View>
  );
}