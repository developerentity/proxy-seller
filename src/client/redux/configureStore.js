import { createStore, applyMiddleware } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import rootReducer from "./rootReducer";

// import logger from "redux-logger";

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
