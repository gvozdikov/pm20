Flight = React.createClass({
  propTypes: {
    flight: React.PropTypes.object.isRequired
  },
  render() {
  var date_time = moment(this.props.flight.departure_date_time).format('YYYY-MM-DD HH:mm');
    return (
      <li>{this.props.flight.flight_number} {date_time}</li>
    );
  }
});
