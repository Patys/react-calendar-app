import React from 'react'

class Event extends React.Component {

  onDragEnd(e) {
    let id = e.target.children.eventId.innerHTML;
    this.props.updateData({id});
  }

  onDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  render() {
    let event = this.props.event[0];

    return(
      <div className="day">
        <div draggable="true" onDragEnd={this.onDragEnd.bind(this)} onDragStart={this.onDragStart.bind(this)}>
          <span hidden="true" id="eventId">{event.id}</span>
          <div className="event q4 past">
            <p className="hours"> {
              event.startDate.getHours()}:{event.startDate.getMinutes()} - {event.endDate.getHours()}:{event.endDate.getMinutes()
              }
            </p>
            <p className="description">{event.firstname} {event.lastname}</p>
            <span className="icon"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Event
