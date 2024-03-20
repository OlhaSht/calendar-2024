import React, { Component } from "react";
import styles from "../Calendar.module.scss";

const days = ['s','m','t','w','t','f','s'];
const DayWeek = () => {
  return (
    <div>
      {days.map((day,i)=>{
        return(<td key={i}>{day}</td>)
      })}
    </div>
  );
};


class DaysOfWeek extends Component {
  render() {
    return (
      <div className={styles.containerMonth}>
        <DayWeek />
      </div>
    );
  }
}

export default DaysOfWeek;

