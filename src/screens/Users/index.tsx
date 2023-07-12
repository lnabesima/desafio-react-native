import { FlatList, Text } from 'react-native';
import { Container } from '@screens/Users/style';
import { UserCard, UserCardProps } from '@components/UserCard';
import { useEffect, useState } from 'react';
import { apiCall } from '@utils/axios';
import { getStoredUsers } from '@storage/Users/getStoredUsers';
import { setStoredUsers } from '@storage/Users/setStoredUsers';
import { Button } from '@components/Button';
import { deleteLoginToken } from '@storage/Login/deleteLoginToken';
import { useNavigation } from '@react-navigation/native';

export function Users() {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [storedUsersExist, setStoredUsersExist] = useState(true);
  const navigator = useNavigation();

  async function fetchUsers() {
    const res = await apiCall('/users');
    setUsers(res.data.data);
    await setStoredUsers(res.data.data);
  }

  async function fetchStoredUsers() {
    const users = await getStoredUsers();
    if (users.length === 0) {
      setStoredUsersExist(false);
    } else {
      setUsers(users);
    }
  }

  async function handleLogout() {
    try {
      await deleteLoginToken();
      // @ts-ignore
      navigator.navigate('login');
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchStoredUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [storedUsersExist]);
  return (
    <Container>
      <Text style={{
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
      }}>Users</Text>
      <FlatList data={users} keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <UserCard id={item.id}
                                                    avatar={item.avatar}
                                                    email={item.email}
                                                    first_name={item.first_name}
                                                    last_name={item.last_name}/>}
                style={{ width: '100%', marginTop: 16 }}
      />

      <Button label={'Logout'} onPress={handleLogout}/>
    </Container>
  );
}