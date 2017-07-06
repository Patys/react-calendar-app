import React from 'react';


class Calendar extends React.Component {

  state = {
    calendar: [
      {}
    ]
  }

  createEvents() {
    let events = [];
    let days = [1,2,3,4,5,6,7];
    for(let i = days[0]; i <= days.length; i++) {
      let event = this.props.data.filter(data => data.day_number===i);
      if(event[0]) {
        let day = event[0].day_number;
        let startDate = new Date(event[0].start_time);
        let endDate = new Date(event[0].end_time);
        let firstname = event[0].patient.firstname;
        let lastname = event[0].patient.lastname;
        events.push({day, startDate, endDate, firstname, lastname});
      }
    }

    let items = days.reduce((arr,day) => {
      let event = events.filter(event => event.day === day);
      console.log(event);
      if(event[0])
        // arr.push(<div className="day" key={day}><div className="event q4 past" draggable="true"><p className="hours">{event.startDate} - {event.endDate}</p><p className="description">{event.firstname} {event.lastname}</p><span className="icon"></span></div><div>);
        arr.push(<div className="day" key={day}><a href=""><div className="event q4 past"><p className="hours">{event[0].startDate.getHours()}:{event[0].startDate.getMinutes()} - {event[0].endDate.getHours()}:{event[0].endDate.getMinutes()}</p><p className="description">{event[0].firstname} {event[0].lastname}</p><span className="icon"></span></div></a></div>);
      else
        arr.push(<div className="day" key={day}></div>);
      return arr;
    }, []);

    // console.log(events);
    return (<div>{items}</div>);
  }

  createCalendar() {
    let workHours = [8,9,10,11,12,13,14,15,16,17,18,19,20];

    return(
      <table>
        <thead>
          <tr>
            <td>Czas</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </thead>
        <tbody>
          {workHours.map((hour) => (<tr>
            <td className="hour">{hour}:00</td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
          </tr>))}
        </tbody>
      </table>
    )
  }

  render() {
    let startDate = new Date(this.props.data[0].start_time);

    return (
    <div>
      <div className="header">
        <h2>Terminplaner</h2>
        <div className="control">
          <span className="prev">&lt;</span>
          <span className="date">{startDate.toLocaleDateString()}</span>
          <span className="next">&gt;</span>
        </div>
        <span className="month"></span>
        <span className="slider"></span>

    </div>
    <div className="table">
      <div className="events">
        {this.createEvents()}
      </div>
      {this.createCalendar()}
    </div>
  </div>
    )
  }
}

export default Calendar
