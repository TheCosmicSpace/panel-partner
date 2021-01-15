import { GetterTree } from "vuex";
import { RootState } from "..";
import { State } from "./state";

// Getters types
export type Getters = {
  doubleCounter(state: State): number;
};

//getters

export const getters: GetterTree<State, RootState> & Getters = {
  doubleCounter: state => {
    console.log("state", state.counter);
    return state.counter * 2;
  }
};
