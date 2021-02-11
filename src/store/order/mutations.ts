import { Order } from '@/data/api/model';
import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

// Mutations Types
export type Mutations<S = State> = {
  [MutationTypes.SET_ORDERS_IN_PROCESS](
    state: S,
    payload: Order[] | null
  ): void;

  [MutationTypes.SET_ACTIVE_ORDER](state: S, activeOrder: Order | null): void;
};

// define mutations
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ORDERS_IN_PROCESS](state: State, payload: Order[] | null) {
    state.ordersInProcess = payload;
  },
  [MutationTypes.SET_ACTIVE_ORDER](state: State, activeOrder: Order | null) {
    state.activeOrder = activeOrder;
  }
};
