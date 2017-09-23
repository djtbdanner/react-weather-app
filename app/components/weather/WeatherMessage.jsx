var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     //  var cityName = this.props.cityName;
//     //  var temp = this.props.temp;
//     var {temp, cityName} = this.props;
//     return (
//       <div>
//         <h3>Temp in {cityName} is {temp}.</h3>
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//       var {temp, cityName} = props;
var WeatherMessage = ( {temp, cityName}) => {
      return (
          <h3>Temperature in {cityName} is {temp}.</h3>
      );
};

module.exports = WeatherMessage;
