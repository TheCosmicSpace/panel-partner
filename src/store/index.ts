import { createStore, createLogger } from 'vuex';
import { store as auth, AuthStore, State as AuthState } from './auth';
import { store as order, OrderStore, State as OrderState } from './order';

export type RootState = {
  auth: AuthState;
  order: OrderState;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> &
  OrderStore<Pick<RootState, 'order'>>;

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    auth,
    order
  }
});

export function useStore(): Store {
  return store as Store;
}
