import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar'

class App extends Component {
  state = {
    data: [
      {
        "id": 1,
        "doctor": {
          "account_id": 7,
          "id": 1,
          "title": "Blue Walker"
        },
        "patient": {
          "id": 2,
          "salutation": "Mrs.",
          "firstname": "Anna",
          "lastname": "A.",
          "gender": 0,
          "notify_email": false,
          "notify_sms": false,
          "language": "de"
        },
        "start_time": "2015-11-11 09:00:00",
        "end_time": "2015-11-11 10:00:00",
        "start_hour": 0,
        "day_number": 1
      },
      {
        "id": 2,
        "doctor": {
          "account_id": 7,
          "id": 1,
          "title": "Blue Walker"
        },
        "patient": {
          "id": 2,
          "salutation": "Mrs.",
          "firstname": "Test",
          "lastname": "Bardzo wielki.",
          "gender": 0,
          "notify_email": false,
          "notify_sms": false,
          "language": "de"
        },
        "start_time": "2015-11-12 12:00:00",
        "end_time": "2015-11-12 13:00:00",
        "start_hour": 0,
        "day_number": 3
      }
    ]
  }

  updateData(data) {
    let newData = this.state.data.filter(d => d.id === parseInt(data.id));
    let newTime = new Date(newData[0].start_time);
    let endTime = new Date(newData[0].end_time);
    newTime.setHours(parseInt(data.data.hour));
    newTime.setDate(data.data.day);
    endTime.setHours(parseInt(data.data.hour+1));
    endTime.setDate(data.data.day);
    newData[0].start_time = newTime.toISOString();
    newData[0].end_time = endTime.toISOString();
    console.log(newData);

    let newArr = this.state.data.filter(d => d.id !== parseInt(data.id));
    newArr.push(...newData);
    console.log(newArr);
    this.setState({data: newArr});
  }

  render() {
    return (
      <div id="terminplaner">
        <Calendar updateData={this.updateData.bind(this)} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
