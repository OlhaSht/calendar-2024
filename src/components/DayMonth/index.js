import {addDays,endOfMonth, getDate,getWeek, getYear, parse, startOfMonth,startOfWeek,} from "date-fns";
import React, { Component } from "react";
import {CurrentDay} from '../../components';
import styles from '../Calendar.module.scss';

class DayMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;

    const startWeek = getWeek(startOfMonth(date));                 // номер початкового тижня місяця (як тиждень першого дня місяці)
    const endWeek = getWeek(endOfMonth(date));                     // номер кінцевого тижня місяця (як тиждень останнього дня місяці)

    const monthDays = [];
    for (let i = startWeek; i <= endWeek; i++) {

      const weekDays = [];
     
      let startWeekDay = startOfWeek(                              // отримати дату першого дня тижня по номеру тижня
        parse(`${i}`, "w", new Date(getYear(date), 0, 1))
      );

      for (let j = 0; j < 7; j++) {                                  // отримати всі 7 дат тижня по першому дню тижня
        weekDays.push(getDate(addDays(startWeekDay, j)));
      }
      monthDays.push(weekDays);
    }
    
    const arrWeeks = monthDays;
    const arrWeek = (monthDays) =>
      monthDays.map((element, i) => <td key={i}>{element}</td>);

    const arrOneWeek = (arrWeeks) =>
      arrWeeks.map((monthDays,i) => (
        <tr>
          <td key= {i}>{arrWeek(monthDays)}</td>
        </tr>
      ));

    return (
      <div className={styles.wrapper}>
          < CurrentDay />
          <thead className={styles.containerMonth}>{arrOneWeek(arrWeeks)}</thead>
      </div>
    );
        
  }
}
export default DayMonth;

// // перевірка, чи співпадають 2 дати (щоб підсвітити поточну дату в календарі)
// const isTheSameDay1 = isSameDay(currentDate, new Date(2022, 0, 8));
// const isTheSameDay2 = isSameDay(currentDate, currentDate);

// // перевірка, чи відноситься дата до виводимого справа місяця
// // (щоб відображати дати поточного місяця і не відображати або притіняти дати попереднього/наступного місяців)
// const isTheSameMonth1 = isSameMonth(date, new Date(2021, 0, 7));
// const isTheSameMonth2 = isSameMonth(date, new Date(2023, 0, 7)); 


// const oneWeek = () => {
    //   return (
    //     <tr>
    //       {monthDays[0].map((num, i) => (
    //         <td key={i}>{num}</td>
    //       ))}
    //     </tr>
    //   );
    // };

