import { createStore, createLogger } from 'vuex';
import {
  store as counter,
  CounterStore,
  State as CounterState
} from './module-example';

import { store as auth, AuthStore, State as AuthState } from './auth';
import { store as order, OrderStore, State as OrderState } from './order';

export type RootState = {
  counter: CounterState;
  auth: AuthState;
  order: OrderState;
};

export type Store = CounterStore<Pick<RootState, 'counter'>> &
  AuthStore<Pick<RootState, 'auth'>> &
  OrderStore<Pick<RootState, 'order'>>;

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    counter,
    auth,
    order
  }
});

export function useStore(): Store {
  return store as Store;
}
