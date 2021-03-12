import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { BusinessReducer, HeadlinesReducer } from "./Business/reducer";
import thunk from "redux-thunk";
import { StyleReducer } from "./styles/reducer";
import { WorldReducer } from "./world/reducer";
import { reducer as healthReducer } from "./health/reducer";
import { reducer as homeReducer } from "./home/reducer";
import { regReducer } from "./registration/reducer";
import { authReducer } from "./auth/reducer";

import { FinanceReducer } from "../Redux/Business/Finance/financeReducer";

const rootReducer = combineReducers({
  world: WorldReducer,
  style: StyleReducer,
  health: healthReducer,

  home: homeReducer,
  business: BusinessReducer,
  finances: FinanceReducer,
  headline: HeadlinesReducer,
  registration: regReducer,
  auth: authReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
// console.log(store.getState())
