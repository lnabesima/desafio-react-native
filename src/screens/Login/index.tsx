import { Container } from '@screens/Login/styles';
import { StyledInput } from '@components/Input';
import { useState } from 'react';
import { Button } from '@components/Button';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <Button label={'Teste'}/>
  </Container>;
}