import Filters from '../Filters';
import Header from '../Header';
import Tickets from '../Tickets';
import styles from './styles.module.css';
import '../../index.css';
const App = () => {
  return (  
    <div className={styles.AppWrapper + " grid"}>
      <Header/>
      <Filters/>
      <Tickets/>
    </div>
  );
};

export default App;
