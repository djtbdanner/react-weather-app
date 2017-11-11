var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var cityName = this.refs.cityName.value;
    if (cityName.length > 0) {
      this.refs.cityName.value = '';
      this.props.onSearch(cityName);
    } else {
      alert("Please enter city name :)");
    }

  },

  render: function() {
    return (<form onSubmit={this.onFormSubmit}>
      <input type="search" placeholder = "Search weather by city" ref="cityName" placeholder="Enter city name"></input>
      <button className="hollow button expanded">Get Weather</button>
    </form>);
  }

});

module.exports = WeatherForm;
