import { GetterTree } from 'vuex';
import { RootState } from '..';
import { State } from './state';

// Getters types
export type Getters = {
  isAuthUser(state: State): boolean;
  getUserID(state: State): string;
};

//getters
export const getters: GetterTree<State, RootState> & Getters = {
  isAuthUser: state => !!state.userID,
  getUserID: state => state.userID
};
