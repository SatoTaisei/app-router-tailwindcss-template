import { Button as NextUIButton } from '@nextui-org/button';

import type { ButtonProps } from '@nextui-org/react';

type Props = {
  label?: string;
} & ButtonProps;

export const Button = ({ label, ...props }: Props) => {
  return <NextUIButton {...props}>{label}</NextUIButton>;
};
