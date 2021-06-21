export interface ITicket {
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_date: string,
  departure_time: string,
  arrival_date: string,
  arrival_time: string,
  carrier: string,
  stops: number,
  price: number
}

export type TicketsArray = ITicket[];

export type currencyType = "RUB" | "USD" | "EUR";