App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Flights collection and puts them on this.data.tasks
  getMeteorData() {
    var now = new Date();
    return {
      flights: FlightService.getAllFlights().fetch(),
      todayFlights: FlightService.getTodayFlights().fetch()
    }
  },

  renderFlights() {
    var data = this.data.flights;
    if (this.state.value === "today") {
      data = this.data.todayFlights;
    }

    return data.map((flight) => {
      return <Flight key={flight._id} flight={flight} />;
    });
  },

  getInitialState() {
    return {
      value: 'all'
    }
  },

  filterChange(event) {
    this.setState({value: event.target.value});
    // event.preventDefault();
  },

  render() {
    return (
      <div className="container">
        <select onChange={this.filterChange} >
          <option value="all">All flights</option>
          <option value="today">Today flights</option>
        </select>
        <ul>
          {this.renderFlights()}
        </ul>
      </div>
    );
  }
});
