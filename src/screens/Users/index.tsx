import { FlatList, Text } from 'react-native';
import { Container } from '@screens/Users/style';
import { UserCard, UserCardProps } from '@components/UserCard';
import { useEffect, useState } from 'react';
import { apiCall } from '@utils/axios';
import { Button } from '@components/Button';
import { getStoredUsers } from '@storage/Users/getStoredUsers';
import { setStoredUsers } from '@storage/Users/setStoredUsers';

export function Users() {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [storedUsersExist, setStoredUsersExist] = useState(true);

  async function fetchUsers() {
    const res = await apiCall('/users');
    setUsers(res.data.data);
    await setStoredUsers(res.data.data);
  }

  async function fetchStoredUsers() {
    const users = await getStoredUsers();
    if (users.length === 0) {
      console.log('fell on users.length === 0 condition');
      setStoredUsersExist(false);
    } else {
      console.log('fell on users.length !== 0 condition');
      setUsers(users);
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
      <Text style={{ color: 'white' }}>This is a Users screen.</Text>
      <FlatList data={users} keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <UserCard id={item.id}
                                                    avatar={item.avatar}
                                                    email={item.email}
                                                    first_name={item.first_name}
                                                    last_name={item.last_name}/>}
                style={{ width: '100%' }}
      />
      <Button label={'Load More'} onPress={() => {
      }}/>
    </Container>
  );
}