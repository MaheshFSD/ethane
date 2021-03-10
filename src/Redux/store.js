import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { StyleReducer } from "./styles/reducer";
import { WorldReducer } from "./world/reducer";

const rootReducer = combineReducers({
  world: WorldReducer,
  style: StyleReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
console.log(store.getState());
