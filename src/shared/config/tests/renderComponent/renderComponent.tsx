import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/providers/store';
import { ReducersMap } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface RenderComponentOptions {
  route?: string
  initialStore?: DeepPartial<StateSchema>
  asyncReducers?: ReducersMap
}
export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
  const { route = '/', initialStore, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialStore as StateSchema}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
