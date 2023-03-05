import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('renders successfully', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
    screen.debug();
  });

  test('renders with right theme and class', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
});
