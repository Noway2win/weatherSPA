// const getWeather = fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=b290260d8d64505cd4e7fe8158bc52f7')
// 	.then(responce=> responce.json());

// console.log(getWeather());
export default class WeatherApi {
	constructor() {
		this._curUrl = 'https://api.openweathermap.org/data/2.5/weather?';
		this._futUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
		this._apiKey = 'cc94a7db78e668a3b7576aeb2f2304a4';
	}


	async _getCurData(city) {
		const responce = await fetch(`${this._curUrl}q=${city}&units=metric&appid=${this._apiKey}`);
		if (!responce.ok) {
			throw new Error(`Something went wrong error at ${this._curUrl}q=${city}&units=metric&appid=${this._apiKey}`);
		}
		return await responce.json();
	}
	async _getFutureData(lat, lon) {
		const responce = await fetch(`${this._futUrl}lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${this._apiKey}`);
		if (!responce.ok) {
			throw new Error(`${this._futUrl}lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${this._apiKey}`);
		}
		return await responce.json();
	}
	getFutureCityWeather = async (lat, lon) => {
		const cityWeather = await this._getFutureData(lat, lon);
		const { daily } = cityWeather;
		return daily;
	}
	getCurrentCityWeather = async (city) => {
		const cityWeather = await this._getCurData(city);
		const { main } = await cityWeather;
		const { feels_like, humidity, pressure, temp } = main;
		return {
			temp: temp,
			pressure: pressure,
			humidity: humidity,
			feelsLike: feels_like
		};
	}
}

