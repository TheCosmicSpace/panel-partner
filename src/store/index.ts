// init
import { CommitOptions, createLogger, createStore, DispatchOptions, Store as VuexStore } from "vuex";
import { counter } from "./module-example";
import { Actions } from "./module-example/actions";
import { Getters } from "./module-example/getters";
import { Mutations } from "./module-example/mutations";

const debug: boolean = process.env.NODE_ENV !== "production";
export interface RootState {
  version: string;
}

const state: RootState = {
  version: "1.0.0"
};

//setup store type
export type Store = Omit<
  VuexStore<RootState>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

// init
export const store = createStore({
  state,
  modules: {
    counter
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export function useStore() {
  return store as Store;
}
