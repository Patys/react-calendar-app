import React from 'react';
import Event from './Event';

class Calendar extends React.Component {

  state = {
    days: [],
    target: {}
  }

  componentDidMount() {
    this.createEvents();
  }

  componentWillReceiveProps() {
    this.setState({days: []}, () => {
      this.createEvents();
      this.forceUpdate();
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    let day = e.target.children.day.innerHTML;
    let hour = e.target.children.hour.innerHTML;

    if(day && day !== undefined && hour && hour !== undefined)
      this.setState({target: {'day': day, 'hour': hour}});
  }

  updateData(val) {
    this.props.updateData({data: this.state.target, id: val.id});
  }

  createEvents() {
    let events = [];
    const days = [1,2,3,4,5,6,7];

    for(let i = days[0]; i <= days.length; i++) {
      let event = this.props.data.filter(data => data.day_number===i);
      if(event[0]) {
        let day = event[0].day_number;
        let startDate = new Date(event[0].start_time);
        let endDate = new Date(event[0].end_time);
        let firstname = event[0].patient.firstname;
        let lastname = event[0].patient.lastname;
        let id = event[0].id;
        events.push({id, day, startDate, endDate, firstname, lastname});
      }
    }

    let items = days.reduce((arr,day) => {
      let event = events.filter(event => event.day === day);
      if(event[0]) {
        let item = <Event event={event} target={this.state.target} updateData={this.updateData.bind(this)}/>;

        this.state.days.push({event: event, item: item});
        this.setState({days: this.state.days});
      }
      return arr;
    }, []);
  }

  renderEvents(hour) {
    let days = [];

    for(let i=0; i<7; i++) {
      let day = this.state.days.filter(event=> (event.event[0].startDate.getHours()===parseInt(hour, 10) && event.event[0].startDate.getDay()===i));
      if(day[0] !== undefined)
        days.push(<td key={i}>{day[0].item}</td>);
      else
        days.push(<td key={i} onDragOver={this.onDragOver.bind(this)}><span id="hour" hidden="true">{hour}</span><span id="day" hidden="true">{i+8}</span></td>);
    }

    return (
      <tr key={hour}>
        <td className="hour">{hour}:00</td>
        {days.map(day=> day)}
      </tr>
    )
  }

  renderCalendar() {
    let workHours = [8,9,10,11,12,13,14,15,16,17,18,19,20];
    return(
      <table>
        <thead>
          <tr>
            <td>Czas</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
        </thead>
        <tbody>
          {workHours.map((hour) => this.renderEvents(hour))}
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
          <span className="date">8-14</span>
          <span className="next">&gt;</span>
        </div>
        <span className="month"></span>
        <span className="slider"></span>

    </div>
    <div className="table">
      {this.renderCalendar()}
    </div>
  </div>
    )
  }
}

export default Calendar
