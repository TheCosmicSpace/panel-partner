import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '..';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { Mutations } from './mutations';
import { State } from './state';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

// actions interface

export interface Actions {
  [ActionTypes.AUTH_USER](
    { commit }: AugmentedActionContext,
    payload: object
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.AUTH_USER]({ commit }, payload: object) {
    commit(MutationTypes.SET_USER, payload);
  }
};
