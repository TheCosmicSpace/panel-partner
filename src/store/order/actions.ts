import { Order } from '@/data/api/model';
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '..';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { Mutations } from './mutations';
import { State } from './state';

import OrderService from '@/data/api/service/order';
const orderService = OrderService.getInstance();

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

// actions interface

export interface Actions {
  [ActionTypes.FETCH_ORDERS_IN_PROCESS]({
    commit
  }: AugmentedActionContext): void;

  [ActionTypes.UPDATE_ORDER_STATE](
    { commit }: AugmentedActionContext,
    payload: { uuid: string; path: string; cookingTime?: number }
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.FETCH_ORDERS_IN_PROCESS]({ commit }) {
    const data = await orderService.getOrdersInProcess();
    commit(MutationTypes.SET_ORDERS_IN_PROCESS, data);
  },
  async [ActionTypes.UPDATE_ORDER_STATE](
    { commit },
    payload: { uuid: string; path: string; cookingTime?: number }
  ) {
    const data = await orderService.updateStateOrder(
      payload.uuid,
      payload.path,
      payload.cookingTime
    );
    // wtf
    if ('uuid' in data) commit(MutationTypes.SET_ACTIVE_ORDER, data);
    else commit(MutationTypes.SET_ACTIVE_ORDER, null);
  }
};
