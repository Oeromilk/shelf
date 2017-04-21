var React = require('react');

var Template = require('./templates/template.jsx').Template;
var stadiums = require('../stadiums.js').stadiums;

var today = new Date();
var year = today.getFullYear();

var BallParkDetail = React.createClass({
  render: function(){
    var parkId = this.props.parkId;
    var stadium = stadiums.find(stadium => stadium.name === parkId);
    var parkAge = year - stadium.yearOpened;
    var stadiumName = stadium.name;
    var splitName = stadiumName.split(' ').join('+').toLowerCase();
    var mapUrl = "https://www.google.com/maps/embed/v1/search?q=" + splitName + "&key=AIzaSyDtCOc-SR5j5FVwHIekuHDQQT4oYlsW5zE";
    console.log(splitName);

    return (
      <div className="row stadium-style">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="stadium-heading">Stadium Information</h1>
          <div>
            <h2 className="stadium-info">{stadium.name} <span className="label label-info">{stadium.team}</span></h2>
            <h2 className="stadium-info">Park Open Date: {stadium.yearOpened} <span className="label label-info">Park Age: {parkAge}</span></h2>
            <h2 className="stadium-info">Capacity <span className="label label-info">{stadium.capacity}</span></h2>
            <h2 className="stadium-info">Distance To Center Field: <span className="label label-info">{stadium.centerField} feet</span></h2>
          </div>
          <img className="seating-image" src={stadium.seatingChartImage}></img>
          <div className="ballpark-map">
            <iframe  width="100%" height="450" frameBorder="0" style={{border:0}}
              src={mapUrl} allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
});

var BallParkDetailContainer = React.createClass({
  render: function(){
    console.log(this.props.parkId);
    return (
      <Template>
        <BallParkDetail parkId={this.props.parkId}></BallParkDetail>
      </Template>
    )
  }
});

module.exports = {
  BallParkDetailContainer: BallParkDetailContainer
};
