import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  backgroundColor?: string;
  opacity?: number;
  backgroundHoverColor?: string;
}

const StyledButton = styled(
  ({
    backgroundColor,
    opacity,
    backgroundHoverColor,
    ...props
  }: ButtonProps) => <MuiButton {...props} />
)(
  ({ theme, backgroundColor, opacity, backgroundHoverColor }) => ({
    opacity: opacity ?? 1,
    backgroundColor: backgroundColor ?? theme.palette.primary.main,
    '&:hover': {
      backgroundColor: backgroundHoverColor ?? theme.palette.primary.dark,
    },
  })
);

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  backgroundColor,
  opacity,
  backgroundHoverColor,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      backgroundColor={backgroundColor}
      opacity={opacity}
      backgroundHoverColor={backgroundHoverColor}
      disabled={disabled}
      data-testid="button"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
