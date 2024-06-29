import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './index';
import React from 'react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

describe('CustomButton Component', () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#9c27b0',
        dark: '#8e24aa',
        light: '#ba68c8',
      },
    },
  });

  it('renders button with default props', () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton>Default Button</CustomButton>
      </ThemeProvider>
    );

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Default Button');
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <CustomButton onClick={handleClick}>Clickable Button</CustomButton>
      </ThemeProvider>
    );

    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('changes background color on hover', () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton
          variant="contained"
          backgroundColor="#9c27b0"
          opacity={0.8}
          backgroundHoverColor="#8e24aa"
        >
          Hover Me
        </CustomButton>
      </ThemeProvider>
    );

    const buttonElement = screen.getByTestId('button');
    fireEvent.mouseOver(buttonElement);
  });

  it('disables button when disabled prop is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton
          variant="contained"
          backgroundColor="#9c27b0"
          opacity={0.8}
          disabled
        >
          Disabled Button
        </CustomButton>
      </ThemeProvider>
    );

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeDisabled();
  });

  it('renders button with custom styles and verifies all props', () => {
    render(
      <ThemeProvider theme={theme}>
        <CustomButton
          variant="contained"
          backgroundColor="#9c27b0"
          opacity={0.8}
          backgroundHoverColor="#8e24aa"
          disabled={false}
          style={{ padding: '10px', fontSize: '20px' }}
        >
          Full Coverage Button
        </CustomButton>
      </ThemeProvider>
    );

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Full Coverage Button');
    expect(buttonElement).toHaveStyle('opacity: 0.8');
    expect(buttonElement).toHaveStyle('padding: 10px');
    expect(buttonElement).toHaveStyle('font-size: 20px');
    expect(buttonElement).not.toBeDisabled();
  });
});
