import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;
  width: 75%;
  align-self: center;
  background-color: #A69C94;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ButtonLabel = styled(Text)`
  color: #101726;
  font-size: 20px;

`;