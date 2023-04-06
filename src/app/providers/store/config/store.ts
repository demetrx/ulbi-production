// Config may be here, near provider itself, or in the shared layer

import {
  CombinedState, configureStore, Middleware, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';
import { StateSchema } from './StateSchema';

const interceptorMiddleware: Middleware<{}, StateSchema> = () => (next) => (action) => {
  if (__PROJECT__ === 'storybook' && action.type?.includes('fetch')) {
    return undefined;
  }

  return next(action);
};

// Create store in a function to reuse it for tests and storybook
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      });

      return [interceptorMiddleware, ...defaultMiddleware] as typeof defaultMiddleware;
    },
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
