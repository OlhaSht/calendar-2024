import React, { Component } from "react";

const DayWeek = () => {
  return (
    <div>
      <span>s</span>
      <span>m</span>
      <span>t</span>
      <span>w</span>
      <span>t</span>
      <span>f</span>
      <span>s</span>
    </div>
  );
};
console.log(DayWeek());
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
