import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTickets } from '../../app/ticketsSlice';
import { ITicket } from '../../app/types';
import fetchTickets from '../../api/fetchTickets';
import Ticket from '../Ticket';
import styles from './styles.module.css';
import applyFilters from '../../api/applyFilters';
const Tickets = () => {

  // filter and sort tickets
  const tickets = useAppSelector(
    state => applyFilters(state.tickets.tickets)
    .sort((a, b) => a.price - b.price));
    
  const dispatch = useAppDispatch();

  // get tickets from JSON on first render
  useEffect(() => {
    dispatch(setTickets(fetchTickets()));
  }, []);

  return (
    <div className={styles.TicketsWrapper}>
      {tickets.map((ticket: ITicket) => 
        <Ticket ticket={ticket}/>)}
    </div>
  );
};

export default Tickets;
