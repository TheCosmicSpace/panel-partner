import { Module } from 'vuex';
import { RootState } from '..';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state, State } from './state';

const namespaced = true;

export const counter: Module<State, RootState> = {
  namespaced,
  getters,
  actions,
  mutations,
  state
};
