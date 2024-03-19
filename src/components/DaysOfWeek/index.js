import React, { Component } from "react";

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
      <div>
        <DayWeek />
      </div>
    );
  }
}

export default DaysOfWeek;

