import { Container } from '@screens/Login/styles';
import { StyledInput } from '@components/Input';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { apiCall } from '@utils/axios';
import { setLoginToken } from '@storage/Login/setLoginToken';
import { useNavigation } from '@react-navigation/native';
import { getLoginToken } from '@storage/Login/getLoginToken';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigation();

  async function fetchStoredToken() {
    try {
      const token = await getLoginToken();
      if (!!token) {
        // @ts-ignore
        navigator.navigate('users');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(email: string, password: string) {
    try {
      const res = await apiCall.post('/api/login', {
        'email': email,
        'password': password,
      });
      await setLoginToken(res.data.token);
      setEmail('');
      setPassword('');
      // @ts-ignore
      navigator.navigate('users');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(useCallback(() => {
    fetchStoredToken().then();
  }, []));

  return <Container>
    <StyledInput style={{ marginBottom: 16 }} placeholder={'email@email.com'}
                 label={'Login'} autoCorrect={false}
                 autoCapitalize={'none'} keyboardType={'email-address'}
                 value={email} onChangeText={setEmail}/>
    <StyledInput placeholder={'password'}
                 label={'Senha'}
                 secureTextEntry={true} autoCorrect={false}
                 autoCapitalize={'none'}
                 value={password} onChangeText={setPassword}/>
    <Button label={'Teste'} onPress={() => handleLogin(email, password)}/>
  </Container>;
}