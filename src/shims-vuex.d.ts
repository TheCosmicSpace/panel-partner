import { Store } from 'vuex';
import { state } from './store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<state>;
  }
}

// Vuex@4.0.0-beta.1 is missing the typing for `useStore`. See https://github.com/vuejs/vuex/issues/1736
import { createStore, useStore as useVuexStore } from 'vuex';

export function useStore(): typeof store {
  return useVuexStore();
}
