import { legacy_createStore } from "redux";
import { Reducer } from "../Redux/Reducer";



export const myStore = legacy_createStore(Reducer);