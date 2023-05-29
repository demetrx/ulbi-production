import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('renders successfully', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('renders with right theme and class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
