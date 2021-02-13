import { Order } from '@/data/api/model';
import { GetterTree } from 'vuex';
import { RootState } from '..';
import { State } from './state';

// Getters types
export type Getters = {
  getOrdersInProcess(state: State): Order[] | null;
  isEmptyOrdersInProcess(state: State): boolean;
  getGroupsOrder(state: State): { [state: string]: Order[] };
  getActivedOrder(state: State): Order | null;
};

//getters
export const getters: GetterTree<State, RootState> & Getters = {
  getOrdersInProcess: state => state.ordersInProcess,
  isEmptyOrdersInProcess: state =>
    state.ordersInProcess === null || state.ordersInProcess.length === 0,
  getGroupsOrder: state => state.groupsOrder,
  getActivedOrder: state => state.activeOrder
};
