App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    let result = FlightService.getAllFlights();

    if (this.state.filter === "today") {
      if (this.state.hideDepartured === true) {
        result = FlightService.getDepartingTodayFlights();
      }
      result = FlightService.getTodayFlights();
    }

    if (this.state.hideDepartured === true) {
      result = FlightService.getNotDeparturedFlights();
    }

    return {
      flights: result.fetch()
    };

  },

  getInitialState() {
    return {
      filter: 'all',
      hideDepartured: false
    }
  },

  renderFlights() {
    return this.data.flights.map((flight) => {
      return <Flight key={flight._id} flight={flight} />;
    });
  },

  toggleHideDepartured() {
    console.log('hideDepartured = ' + this.state.hideDepartured);
    this.setState({
      hideDepartured: !this.state.hideDepartured
    });
  },

  handleAddFlight(event) {
    event.preventDefault();

    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Flights.insert({
      flight_number: text,
      departure_date_time: new Date()
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  handleFilterChange(event) {
    this.setState({filter: event.target.value});
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Flight List</h1>

          <label className="hide-departured">
            <input
                type="checkbox"
                checked={this.state.hideDepartured}
                onClick={this.toggleHideDepartured} />
            Hide Departured Flights
          </label>

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
