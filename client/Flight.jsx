Flight = React.createClass({
  propTypes: {
    flight: React.PropTypes.object.isRequired
  },

  deleteThisFlight() {
    Flights.remove(this.props.flight._id);
  },

  render() {
  var date_time = moment(this.props.flight.departure_date_time).format('YYYY-MM-DD HH:mm');
    return (
      <li>
        <button className="delete" onClick={this.deleteThisFlight}>
          &times;
        </button>
        <span>{this.props.flight.flight_number} {date_time}</span>
      </li>
    );
  }
});
