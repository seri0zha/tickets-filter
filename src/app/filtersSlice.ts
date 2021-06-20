import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "./types";

interface FiltersState {
  currency: currencyType
}

const initialState: FiltersState = {
  currency: "RUB"
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    switchCurrency(state, action: PayloadAction<currencyType>) {
      state.currency = action.payload;
    }
  }
})

export default filtersSlice.reducer;
export const { switchCurrency } = filtersSlice.actions;