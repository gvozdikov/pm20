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

  handleAddFlight(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Flights.insert({
      flight_number: text,
      departure_date_time: new Date()
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  handleFilterChange(event) {
    this.setState({value: event.target.value});
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Flight List</h1>
          <form className="new-flight" onSubmit={this.handleAddFlight} >
            <lable>
              Add flight:
              <input
                type="text"
                ref="textInput"
                placeholder="Flight number" />
            </lable>
          </form>
          <select onChange={this.handleFilterChange} >
            <option value="all">All flights</option>
            <option value="today">Today flights</option>
          </select>
        </header>

        <ul>
          {this.renderFlights()}
        </ul>
      </div>
    );
  }
});
