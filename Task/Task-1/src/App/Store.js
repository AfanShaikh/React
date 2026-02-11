import { legacy_createStore } from "redux";
import { counterReducer } from "../Reducer/Reducer";

export const myStore = legacy_createStore(counterReducer);


