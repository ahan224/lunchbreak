var React = require('react'),
	Router = require('react-router'),
	ReactDOM = require('react-dom'),
	About = require('./../routes/About');


var App = React.createClass({

	getInitialState: function() {
		return {
			name: '',
			rating: '',
			price: '',
			address: '',
		};
	},


	setLocation: function(location) {
		this.setState({
			name: location.name,
			rating: location.rating,
			price: location.price,
			address: location.address
		});
	},


	render: function() {
		return (
			<div className="container">
				<h1>Lunch Break</h1>
				<About setLocation={this.setLocation} name={this.state.name} rating={this.state.rating} price={this.state.price} address={this.state.address} />
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById('react') );
