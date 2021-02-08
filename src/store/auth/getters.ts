import { GetterTree } from 'vuex';
import { RootState } from '..';
import { State } from './state';

// Getters types
export type Getters = {
  isAuthUser(state: State): boolean;
  getUser(state: State): object | string | null;
};

//getters
export const getters: GetterTree<State, RootState> & Getters = {
  isAuthUser: state => !!state.user,
  getUser: state => state.user
};
