import { Order } from '@/data/api/model';

export type State = {
  activeOrder: Order | null;
  ordersInProcess: Order[] | null;
  groupsOrder: {
    [state: string]: Order[];
  };
};

export const state: State = {
  activeOrder: null,
  ordersInProcess: null,
  groupsOrder: {
    created: [],
    cooking: [],
    ready: [],
    delivery: []
  }
};
