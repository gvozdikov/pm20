App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      flights: Flights.find({}).fetch()
    }
  },

  renderFlights() {
    return this.data.flights.map((flight) => {
      return <Flight key={flight._id} flight={flight} />;
    });
  },

  render() {
    return (
      <div className="container">
        <ul>
          {this.renderFlights()}
        </ul>
      </div>
    );
  }
});
