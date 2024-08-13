import { Button as NextUIButton } from '@nextui-org/button';

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return <NextUIButton>{label}</NextUIButton>;
};
