var React = require('react');
var {
  Link,
  IndexLink
} = require('react-router');

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ul>
//           <li>
//             <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//           </li>
//           <li>
//             <Link to='/about' activeClassName='active'  activeStyle={{fontWeight: 'bold'}}>About</Link>
//           </li>
//           <li>
//             <Link to='/examples' activeClassName='active'  activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//           </li>
//         </ul>
//
//       </div>
//     );
//   }
// });

/*
 Notes:
  Gotta use the className for HTML classes as there is a conflict with a JSX keyword
  Foundation is the css that we are using

*/

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault;
    var location = this.refs.navSearch.value;
    if (location && location.length > 1){
      var encodedLocation = encodeURIComponent(location);
      this.refs.navSearch.value = '';
      window.location.hash="#/?location="+ encodedLocation;
      // this.props.router.push('/?location='+ location);
    } else {
      alert ("No city entered")
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="navSearch"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
