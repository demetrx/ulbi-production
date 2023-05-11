import { ComponentType, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/store';
import { StateSchemaKey } from '@/app/providers/store/config/StateSchema';

type ReducersMap = {
  [name in StateSchemaKey]?: Reducer
}

interface WithAsyncReducersConfig {
  reducers: ReducersMap
  removeAfterUnmount?: boolean
}

export const withAsyncReducers = <P extends object>(
  Component: ComponentType<P>,
  config: WithAsyncReducersConfig,
) => (props: P) => {
    const { reducers, removeAfterUnmount = true } = config;

    const store = useStore() as ReduxStoreWithManager; // temporary
    const dispatch = useDispatch();

    useEffect(() => {
      Object.entries(reducers).forEach(([name, reducer]) => {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });

      return () => {
        Object.entries(reducers).forEach(([name]) => {
          if (removeAfterUnmount) {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        });
      };
    // eslint-disable-next-line
  }, []);

    return <Component {...props} />;
  };
