import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketsArray } from "./types";

interface TicketsState {
  tickets: TicketsArray
}

const initialState: TicketsState = {
  tickets: []
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<TicketsArray>) {
      state.tickets = action.payload;
    }
  }
});

export default ticketsSlice.reducer;
export const { setTickets } = ticketsSlice.actions;