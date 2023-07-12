import { Input, Label } from '@components/Input/styles';
import { TextInputProps } from 'react-native';

interface LoginProps extends TextInputProps {
  label?: string;

}

export function StyledInput({
                              label,
                              value,
                              onChangeText,
                              placeholder,
                              ...rest
                            }: LoginProps) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Input value={value} onChangeText={onChangeText}
             placeholder={placeholder} {...rest}/>
    </>
  );
}