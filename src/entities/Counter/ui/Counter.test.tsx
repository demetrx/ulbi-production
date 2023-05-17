import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '@/shared/config/tests/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders successfully', () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });

    await userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    renderComponent(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });

    await userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
