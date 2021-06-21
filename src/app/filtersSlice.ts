import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "./types";

interface FiltersState {
  currency: currencyType
  exchangeRates: {
    USD: number,
    EUR: number,
  },
  stops: boolean[]
}

const initialState: FiltersState = {
  currency: "RUB",
  exchangeRates: {
    USD: 72.8,
    EUR: 86.3
  },
  stops: new Array(4).fill(false)
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    switchCurrency(state, action: PayloadAction<currencyType>) {
      state.currency = action.payload; // EUR, RUB or USD
    },
    toggleAllStops(state) {
      let containsOnlyOneValue = new Set(state.stops).size === 1;
      if (containsOnlyOneValue) {
        state.stops = state.stops.map(stop => !stop);
      } else {
        state.stops = new Array(4).fill(true);
      }
    },
    toggleCurrentStop(state, action: PayloadAction<number>) {
      state.stops[action.payload] = !state.stops[action.payload];
    }
  }
})

export default filtersSlice.reducer;
export const { 
  switchCurrency, 
  toggleAllStops, 
  toggleCurrentStop } = filtersSlice.actions;