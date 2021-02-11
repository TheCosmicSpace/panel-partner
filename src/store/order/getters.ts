import { Order } from '@/data/api/model';
import { GetterTree } from 'vuex';
import { RootState } from '..';
import { State } from './state';

// Getters types
export type Getters = {
  getOrdersInProcess(state: State): Order[] | null;
  getActivedOrder(state: State): Order | null;
};

//getters
export const getters: GetterTree<State, RootState> & Getters = {
  getOrdersInProcess: state => state.ordersInProcess,
  getActivedOrder: state => state.activeOrder
};
