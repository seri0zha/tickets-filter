import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTickets } from '../../app/ticketsSlice';
import { ITicket } from '../../app/types';
import fetchTickets from '../../api/fetchTickets';
import Ticket from '../Ticket';
import styles from './styles.module.css';
const Tickets = () => {

  const tickets = useAppSelector(state => state.tickets.tickets);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTickets(fetchTickets()));
  }, []);

  return (
    <div className={styles.TicketsWrapper}>
      {tickets ? tickets.map((ticket: ITicket) => 
        <Ticket ticket={ticket}/>) : <></>}
    </div>
  );
};

export default Tickets;
