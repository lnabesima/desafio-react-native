import styled from 'styled-components';
import { Text, TextInput } from 'react-native';

export const Input = styled(TextInput)`
  flex: 1;
  padding: 8px;
  min-height: 48px;
  max-height: 48px;
  border: 1px solid black;
  background-color: white;
  border-radius: 6px;
`;
export const Label = styled(Text)`
  font-size: 14px;
`;
