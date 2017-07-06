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
      }
    ]
  }

  render() {
    return (
      <div id="terminplaner">
        <Calendar data={this.state.data}/>
      </div>
    );
  }
}

export default App;
