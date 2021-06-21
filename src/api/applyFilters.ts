import { TicketsArray, ITicket } from "../app/types";
import store from "../app/store";

const applyFilters = (tickets: TicketsArray): TicketsArray => {
  if (tickets?.length === 0 || !tickets) {
    return [];
  }
  const stops = store.getState().filters.stops;

  let filteredTickets = JSON.parse(JSON.stringify(tickets));
  filteredTickets = filteredTickets.filter((ticket: ITicket) => stops[ticket.stops]);
  return filteredTickets;
};

export default applyFilters;