import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {
  useSelector as useSelectorRR,
  useDispatch as useDispatchRR
} from "react-redux";
import { CombinedState, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

import reducers from "./reducers";
import { AppState, AppActions, ThunkDispatch } from "./store.types";

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

// Allow redux dev tools to work for this app
let composeEnhancers: any = compose;
if (process.env.NODE_ENV === "development") {
  // Allow redux dev tools to work for this app
  composeEnhancers = composeWithDevTools({ trace: true });
}

// combine reducers into a single one
const reducer = combineReducers({
  ...reducers
});

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];

// Create the general redux system + apply middleware if needed
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// CREATING INITIAL STORE
const getStore = (initialState?: CombinedState<any>): Store => {
  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
      );

      const reducers = combineReducers<AppState>({
        ...require("./reducers").default
      });

      store.replaceReducer(reducers);
    });
  }

  return store;
};

export const getOrCreateStore = (initialState?: CombinedState<any>): Store => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === "undefined") {
    return getStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!(window as any)[__NEXT_REDUX_STORE__]) {
    (window as any)[__NEXT_REDUX_STORE__] = getStore(initialState);
  }
  return (window as any)[__NEXT_REDUX_STORE__];
};

const useSelector = <T>(selector: (state: AppState) => T) =>
  useSelectorRR<AppState, T>(selector);

const useDispatch = () => useDispatchRR<ThunkDispatch>();

// Note: do not use store, it is only meant to be used for testing purposes
export default store;
export { reducer, useSelector, useDispatch };
