import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./state";

// Mutations Types
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
};

// define mutations
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.counter = payload;
  }
};
