import { ButtonContainer, ButtonLabel } from '@components/Button/styles';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, onPress, ...rest }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} {...rest}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  );
}