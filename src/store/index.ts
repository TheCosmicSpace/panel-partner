import { createStore, createLogger } from 'vuex';
import {
  store as counter,
  CounterStore,
  State as CounterState
} from './module-example';

export type RootState = {
  counter: CounterState;
};

export type Store = CounterStore<Pick<RootState, 'counter'>>;

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    counter
  }
});

export function useStore(): Store {
  return store as Store;
}
