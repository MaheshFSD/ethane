import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { WorldReducer } from "./world/reducer";
import {reducer as healthReducer} from "./health/reducer"
import {reducer as homeReducer} from "./home/reducer"

const rootReducer = combineReducers({
  world: WorldReducer,
  health: healthReducer,
  home: homeReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
console.log(store.getState());
