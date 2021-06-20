import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketsType } from "./types";

interface TicketsState {
  tickets: TicketsType
}

const initialState: TicketsState = {
  tickets: null
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action: PayloadAction<TicketsType>) {
      state.tickets = action.payload;
    }
  }
});

export default ticketsSlice.reducer;
export const { setTickets } = ticketsSlice.actions;