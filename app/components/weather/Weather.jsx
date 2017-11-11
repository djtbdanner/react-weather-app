var React = require('react');
var openWeatherMap = require('openWeatherMap');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({

  // called automatically by React
  getInitialState: function() {
    return {isLoading: false};
  },

  // handle search is fron the onSearch being mapped to this function
  handleSearch: function(cityName) {
    var that = this;

    this.setState({
      isLoading:true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(cityName).then(function(temp) {
      that.setState({cityName: cityName, temp: temp, isLoading:false});
    }, function(errorMessage) {
      that.setState({cityName: '', temp: '', isLoading:false, errorMessage:errorMessage.message});
    })

  },



  render: function() {

    //  var temp = this.state.temp;
    //  var cityName = this.state.cityName;
    // this is a new way to do the above (thi is called ES6 descructuring)
    var {isLoading, temp, cityName, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage temp={temp} cityName={cityName}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="center-text">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
