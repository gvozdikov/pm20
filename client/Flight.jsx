Flight = React.createClass({
  propTypes: {
    flight: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.flight.flight_number} {this.props.flight.departure_date_time}</li>
    );
  }
});
