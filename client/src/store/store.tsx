import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { linkApi } from "./api/linkApi";

const rootReducer = combineReducers({
  [linkApi.reducerPath]: linkApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat(linkApi.middleware),
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch