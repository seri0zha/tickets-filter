import Filters from '../Filters';
import Header from '../Header';
import Tickets from '../Tickets';
import styles from './styles.module.css';

const App = () => {
  return (  
    <div className={styles.AppWrapper}>
      <Header/>
      <Filters/>
      <Tickets/>
    </div>
  );
};

export default App;
