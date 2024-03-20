import { format } from "date-fns";
import React, { Component } from "react";
import styles from "../Calendar.module.scss";

class CurrentDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.currentDay}>{format(date, "EEEE")}</p>
          <h1 className={styles.currentNumber}>{format(date, "dd")}</h1>
        </div>
      </div>
    );
  }
}

export default CurrentDay;

// const WEEK_DAYS = ["SANDAY", "M...", "T", "W", "T", "F", "S"];
// const currentDay = getDate(currentDate);                            // поточне число
// const currentWeekday = WEEK_DAYS[getDay(currentDate)];           // день тижня
