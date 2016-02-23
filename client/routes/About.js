var React = require('react');
var request = require('superagent');

var About = React.createClass({

	pickLocation: function() {
		var that = this;
      	request
      	.get('http://localhost:3000/api/yelp')
      	.set('Content-Type', 'application/json')
      	.end(function(err, res) {
      		if (that.refs.price.value) {
      			var filteredArray = res.body.filter(function(val) {
      				return val.price.length >= Math.ceil(that.refs.price.value/10);
      			});
      			var randomLocation = filteredArray[Math.floor(Math.random() *filteredArray.length)];
      			that.props.setLocation(randomLocation);
      		}
      		// if (that.refs.rating.value) {
      		// 	var filteredArray = res.body.filter(function(val) {
      		// 		return Number(val.rating.slice(0,3)) >= that.refs.rating.value);
      		// 	});
      		// 	var randomLocation = filteredArray[Math.floor(Math.random() *filteredArray.length)];
      		// 	that.props.setLocation(randomLocation);
      		// }
      	});
	},


	render: function() {
		return (
		    <div>z
    			<input ref='price' name="Price" type="text" placeholder="Price Range"></input>
				<button onClick={this.pickLocation}>Eat!</button>
				<div>
					<h2>Here's where you're eating today...</h2>
					<p>Name: {this.props.name}</p>	
					<p>Rating: {this.props.rating}</p>
					<p>Price: {this.props.price}</p>
					<p>Address: {this.props.address}</p>
				</div>
			</div>
		);
	}
});

module.exports = About;
    