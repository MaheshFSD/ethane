import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { WorldReducer } from './world/reducer'
import { BusinessReducer, HeadlinesReducer } from './Business/reducer'
import { FinanceReducer } from '../Redux/Business/Finance/financeReducer'

const rootReducer = combineReducers({
  world: WorldReducer,
  business: BusinessReducer,
  finances: FinanceReducer,
  headline: HeadlinesReducer,
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer)
// console.log(store.getState())
