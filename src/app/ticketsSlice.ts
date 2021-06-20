import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ticketsType } from "./types";

interface TicketsState {
  tickets: ticketsType
}

const initialState: TicketsState = {
  tickets: null
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<ticketsType>) {
      state.tickets = action.payload;
    }
  }
});

export default ticketsSlice.reducer;
export const { setTickets } = ticketsSlice.actions;