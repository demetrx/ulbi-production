import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';

export interface RenderComponentOptions {
  route?: string
  initialStore?: DeepPartial<StateSchema>
}
export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
  const { route = '/', initialStore } = options;

  return render(
    <StoreProvider initialState={initialStore as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
