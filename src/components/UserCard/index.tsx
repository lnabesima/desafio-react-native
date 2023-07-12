import { Image, Text, View } from 'react-native';
import { UserCardContainer } from '@components/UserCard/styles';

export interface UserCardProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export function UserCard(user: UserCardProps) {
  const user2 = {
    'id': 7,
    'email': 'michael.lawson@reqres.in',
    'first_name': 'Michael',
    'last_name': 'Lawson',
    'avatar': 'https://reqres.in/img/faces/7-image.jpg',
  };

  return (<>
    <Text /*style={{ color: 'white' }}*/>User Card</Text>

    <UserCardContainer>
      <Image source={{ uri: user.avatar }}
             style={{ width: 72, height: 72, borderRadius: 100 }}/>
      <View>
        <Text
          style={{ color: 'white' }}>Name: {user.first_name} {user.last_name}</Text>
        <Text style={{ color: 'white' }}>Email: {user.email}</Text>
      </View>
    </UserCardContainer>
  </>);
}