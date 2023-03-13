import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders successfully', () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });

    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });

    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
