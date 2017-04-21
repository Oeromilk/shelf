var React = require('react');

var Template = require('./templates/template.jsx').Template;
var stadiums = require('../stadiums.js').stadiums;

console.log(stadiums.find(stadium => stadium.name === "Tropicana Field"));

var BallParkListing = React.createClass({
  findMatches: function(name){
    var router = this.props.router;
    console.log('clicked', name);
    router.navigate('ballparks/' + name + '/', {trigger: true});
  },
  render: function(){
    console.log(this.props.router);
    var stadiumListing = stadiums.map(stadium => {
      return (
        <button onClick={()=>this.findMatches(stadium.name)} key={stadium.name} type="button" id="stadium-listing" className="list-group-item">{stadium.name}</button>
      )
    })
    return (
      <div className="row stadium-style">
        <div className="col-md-6 col-md-offset-3">
          <div className="list-group">
            {stadiumListing}
          </div>
        </div>
      </div>
    )
  }
});

var BallParksContainer = React.createClass({
  render: function(){

    return (
      <Template>
        <BallParkListing router={this.props.router}></BallParkListing>
      </Template>
    )
  }
});

module.exports = {
  BallParksContainer: BallParksContainer
};
