import axios from 'axios';

const API_KEY = '893b49c9a66cd265295cee12a150f97c';
// using ES6 template strings format...
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request:' request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
