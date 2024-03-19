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
          <h2>{format(date, "dd")}</h2>
          <p>{format(date, "EEEE")}</p>
        </div>
      </div>
    );
  }
}

export default CurrentDay;

// const WEEK_DAYS = ["SANDAY", "M...", "T", "W", "T", "F", "S"];
// const currentDay = getDate(currentDate);                            // поточне число
// const currentWeekday = WEEK_DAYS[getDay(currentDate)];           // день тижня
