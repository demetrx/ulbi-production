import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersMap } from 'shared/lib/hocs';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

// This is for Storybook, may neglect absolute import from inside a module
const defaultAsyncReducers: ReducersMap = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersMap,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state as StateSchema}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
