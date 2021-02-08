import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

// Mutations Types
export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: object): void;
};

// define mutations
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state: State, payload: object) {
    state.user = payload;
  }
};
