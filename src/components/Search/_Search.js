import React from 'react';
import axios from 'axios';

//components
import Map from '../../Map';

//assets
import Loader from '../../assets/loader.svg';
import Globe_icon from '../../assets/globe.png';
import Time_icon from '../../assets/time.svg';
import Day_icon from '../../assets/day.svg';
import Temp_icon from '../../assets/temp.svg';
import Humidity_icon from '../../assets/humidity.png';
import Wind_icon from '../../assets/wind.png';

class Weather extends React.Component {

    constructor({match}) {
        super();

        this.state = {
            searched: match.params.city,
            isLoading: true,
            weatherData: {
                country: '',
                weather: '',
                weatherIcon: Temp_icon,
                description: '',
                temperature: '',
                humidity:'',
                wind:''
            }

        }
    }



    componentDidMount() {
        (async () => {
            const fetchWeather = await axios(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: this.state.searched,
                    units: 'metric',
                    appId: 'c31040535f2db82ab8aa9bc53255dea3'
                }
            });
            this.setState({
                weatherData: {
                    country: fetchWeather.data.sys.country,
                    weatherIcon: `https://openweathermap.org/img/w/${fetchWeather.data.weather[0].icon}.png`,
                    description: fetchWeather.data.weather[0].description,
                    temperature: fetchWeather.data.main.temp,
                    humidity: fetchWeather.data.main.humidity,
                    wind: fetchWeather.data.wind,
                }
            })
            this.setState({ isLoading: !this.state.isLoading })
        })()
    }

    render() {

        const date = new Date();
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        const { isLoading, weatherData, searched } = this.state;

        const ifLoader = isLoading && (
            <div className="loader">
                <img src={Loader} />
            </div>
        )
        console.log(weatherData)
        return (
            <div className="weather-info">
                <div className="weather">
                    {ifLoader}
                    <div className="data">
                        <img src={Globe_icon} width="50px" />
                        <p>{weatherData.country}</p>
                        <p>{searched}</p>
                    </div>
                    <div className="data">
                        <img src={Time_icon} width="50px" />
                        <p>{date.getHours() + ":" + date.getMinutes() + " "}</p>
                    </div>
                    <div className="data">
                        <img src={Day_icon} width="50px" />
                        <p>{days[date.getDay()] + " "}</p>
                    </div>
                    <div className="data">
                        <img src={weatherData.weatherIcon} className="wicon" width="50px" />
                        <p>{weatherData.description}</p>
                        <p>{weatherData.temperature} °C</p>
                    </div>
                    <div className="data">
                        <img className="circle_icon" src={Humidity_icon} width="50px" />
                        <p>{weatherData.humidity} %</p>
                    </div>
                    <div className="data">
                        <img className="circle_icon" src={Wind_icon} width="50px" />
                        <p>{weatherData.wind.speed} km/h</p>
                    </div>
                </div>
                <Map location={searched} />
            </div>
        );
    }
}

export default Weather;