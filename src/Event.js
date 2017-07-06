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
    return(
      <div className="day">
        <div draggable="true" onDragEnd={this.onDragEnd.bind(this)} onDragStart={this.onDragStart.bind(this)}>
          <span hidden="true" id="eventId">{this.props.event[0].id}</span>
          <div className="event q4 past">
            <p className="hours"> {
              this.props.event[0].startDate.getHours()}:{this.props.event[0].startDate.getMinutes()} - {this.props.event[0].endDate.getHours()}:{this.props.event[0].endDate.getMinutes()
              }
            </p>
            <p className="description">{this.props.event[0].firstname} {this.props.event[0].lastname}</p>
            <span className="icon"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Event
