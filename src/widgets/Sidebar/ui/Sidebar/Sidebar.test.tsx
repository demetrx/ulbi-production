import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('renders successfully', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggles', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
