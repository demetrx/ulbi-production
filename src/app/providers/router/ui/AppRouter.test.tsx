import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/config/tests/renderComponent/renderComponent';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/app/providers/router';
import { UserRole } from '@/entities/User';

describe('app/router', () => {
  test('Page should load', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Page not found', async () => {
    renderComponent(<AppRouter />, {
      route: '/kajawdwdlawdkawjdlk',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect of not authenticated user to main page', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Access to a private page for an authenticated user', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialStore: {
        user: { authData: { id: '1' }, _initialized: true },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Access forbidden (absent role)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialStore: {
        user: { authData: {}, _initialized: true },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Access granted (present role)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialStore: {
        user: { authData: { roles: [UserRole.ADMIN] }, _initialized: true },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
