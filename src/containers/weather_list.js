import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component  {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273.15) * 9/5 + 32);
		const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => pressure * 0.02952998751);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;
		const { lon, lat } = cityData.city.coord; // ES6 allows condensing the above

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="F" /></td>
				<td><Chart data={pressures} color="green" units="inHg" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		);
	}



	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (inHg)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

// function mapStateToProps(state) {
// 	return { weather: state.weather };
// }
// ES6 version of the above...
function mapStateToProps({ weather }) {
	return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
