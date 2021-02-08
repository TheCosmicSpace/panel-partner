import { createStore, createLogger } from 'vuex';
import {
  store as counter,
  CounterStore,
  State as CounterState
} from './module-example';

import { store as auth, AuthStore, State as AuthState } from './auth';

export type RootState = {
  counter: CounterState;
  auth: AuthState;
};

export type Store = CounterStore<Pick<RootState, 'counter'>> &
  AuthStore<Pick<RootState, 'auth'>>;

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    counter,
    auth
  }
});

export function useStore(): Store {
  return store as Store;
}
