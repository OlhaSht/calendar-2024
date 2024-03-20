import './App.css';
import CurrentDay from './components/CurrentDay/index';
import DayMonth from './components/DayMonth';
import styles from './components/Calendar.module.scss'

function App() {
  return (
    <div className={styles.calendarWrapper}>
      <CurrentDay />
      <DayMonth />
    </div>
  );
}

export default App;
