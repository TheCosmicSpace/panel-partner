import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '..';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { Mutations } from './mutations';
import { State } from './state';

import AuthService from '@/data/api/service/auth';
const authService = AuthService.getInstance();

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
    payload: { login: string; password: string }
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.AUTH_USER](
    { commit },
    payload: { login: string; password: string }
  ) {
    // AuthService
    const data = await authService.authUser(payload.login, payload.password);
    localStorage.setItem('userData', JSON.stringify(data));
    commit(MutationTypes.SET_USER_ID, data.user_uuid);
  }
};
