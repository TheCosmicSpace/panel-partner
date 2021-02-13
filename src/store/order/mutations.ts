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

  [MutationTypes.GROUPING_ORDERS](state: S): void;
};

// define mutations
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ORDERS_IN_PROCESS](state: State, payload: Order[] | null) {
    state.ordersInProcess = payload;
  },
  [MutationTypes.SET_ACTIVE_ORDER](state: State, activeOrder: Order | null) {
    state.activeOrder = activeOrder;
  },
  [MutationTypes.GROUPING_ORDERS](state: State) {
    if (!state.ordersInProcess) return;
    // Clean prev state orders
    for (const key of Object.keys(state.groupsOrder)) {
      state.groupsOrder[key] = [];
    }
    // Grouping by state
    for (const [key, value] of Object.entries(state.groupsOrder)) {
      const filtered = state.ordersInProcess.filter(
        el => el.state === key
      ) as Order[];
      value.push(...filtered);
    }
  }
};
