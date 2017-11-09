var React = require('react');
var openWeatherMap = require('openWeatherMap');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');


var Weather = React.createClass({

  // called automatically by React
  getInitialState: function() {
    return {isLoading: false};
  },

  // handle search is fron the onSearch being mapped to this function
  handleSearch: function(cityName) {
    var that = this;
    this.setState({isLoading:true});
    openWeatherMap.getTemp(cityName).then(function(temp) {
      that.setState({cityName: cityName, temp: temp, isLoading:false});
    }, function(errorMessage) {
      that.setState({cityName: '', temp: '', isLoading:false});
      alert("Error: " + errorMessage);
    })

  },

  render: function() {

    //  var temp = this.state.temp;
    //  var cityName = this.state.cityName;
    // this is a new way to do the above (thi is called ES6 descructuring)
    var {isLoading, temp, cityName} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage temp={temp} cityName={cityName}/>;
      }
    }

    return (
      <div>
        <h1 className="center-text">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
