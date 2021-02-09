import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

// Mutations Types
export type Mutations<S = State> = {
  [MutationTypes.SET_USER_ID](state: S, payload: string): void;
};

// define mutations
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER_ID](state: State, payload: string) {
    state.userID = payload;
  }
};
