var React = require('react');
//
// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
//
// module.exports = About;

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This was me learning to use React.</p>
      <ul>
        <li><a href="https://facebook.github.io/react"> React</a> - This is the framework used and learned (mostly)</li>
        <li><a href="https://openweathermap.org">openWeatherMap</a> This is the API for the weather calls.</li>
      </ul>

    </div>

  )
};

module.exports = About;
