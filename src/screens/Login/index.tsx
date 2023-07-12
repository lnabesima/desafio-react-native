import { Container } from '@screens/Login/styles';
import { StyledInput } from '@components/Input';
import { useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { apiCall } from '@utils/axios';
import { getLoginToken } from '@storage/Login/getLoginToken';
import { setLoginToken } from '@storage/Login/setLoginToken';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getLoginToken();
  }, []);

  async function handleLogin(email: string, password: string) {
    try {
      const res = await apiCall.post('/api/login', {
        'email': email,
        'password': password,
      });
      console.log(res.data.token);
      await setLoginToken(res.data.token);
    } catch (error) {
      console.log(error);
    }
  }

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