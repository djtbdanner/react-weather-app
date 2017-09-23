var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var cityName = this.refs.cityName.value;
    if (cityName.length > 0) {
      this.refs.cityName.value = '';
      this.props.onSearch(cityName);
    } else {
      alert("sould enter city name");
    }

  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="cityName" placeholder="Enter city name"></input>
        <button>Get Weather</button>
      </form>
    );
  }

});

module.exports = WeatherForm;
