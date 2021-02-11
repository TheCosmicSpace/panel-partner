import { Order } from '@/data/api/model';

export type State = {
  ordersInProcess: Order[] | null;
  activeOrder: Order | null;
};

export const state: State = {
  ordersInProcess: null,
  activeOrder: null
};
