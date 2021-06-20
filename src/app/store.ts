import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import ticketsSlice from "./ticketsSlice";

const rootReducer = combineReducers({
  tickets: ticketsSlice,
  filters: filtersSlice,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;