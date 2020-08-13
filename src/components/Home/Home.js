import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components
import Map from '../Map';

//assets
import Loader from '../../assets/loader.svg';
import Globe_icon from '../../assets/globe.png';
import Time_icon from '../../assets/time.svg';
import Day_icon from '../../assets/day.svg';
import Temp_icon from '../../assets/temp.svg';
import Humidity_icon from '../../assets/humidity.png';
import Wind_icon from '../../assets/wind.png';

const Home = () => {

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

    const [country, setCountry] = useState([]);
    const [location, setLocation] = useState('');
    const [time, isTime] = useState('');
    const [day, isDay] = useState('');
    const [weatherIcon, setWeatherIcon] = useState([Temp_icon]);
    const [weatherDescription, setWeatherDescription] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [windData, setWindData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const fetchLocation = await axios('http://ip-api.com/json/');
            const loc = fetchLocation.data.city;
            const fetchWeather = await axios(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: loc,
                    units: 'metric',
                    appId: 'c31040535f2db82ab8aa9bc53255dea3'
                }
            });

            setCountry(fetchWeather.data.sys);
            setLocation(loc);
            setWeatherIcon(`https://openweathermap.org/img/w/${fetchWeather.data.weather[0].icon}.png`);
            setWeatherDescription(fetchWeather.data.weather[0].description);
            setWeatherData(fetchWeather.data.main);
            setWindData(fetchWeather.data.wind);
            isTime(date.getHours() + ":" + date.getMinutes() + " ");
            isDay(days[date.getDay()] + " ");
            setIsLoading(false);
            console.log(fetchWeather)

        })();
    }, [])

    const ifLoader = isLoading && (
        <div className="loader">
            <img src={Loader} />
        </div>
    );
    return (
        <div className="weather-info">
            <div className="weather">
                {ifLoader}
                <div className="data">
                    <img src={Globe_icon} width="50px" />
                    <p>{country.country}</p>
                    <p>{location}</p>
                </div>
                <div className="data">
                    <img src={Time_icon} width="50px" />
                    <p>{time}</p>
                </div>
                <div className="data">
                    <img src={Day_icon} width="50px" />
                    <p>{day}</p>
                </div>
                <div className="data">
                    <img src={weatherIcon} className="wicon" width="50px" />
                    <p>{weatherDescription}</p>
                    <p>{weatherData.temp} °C</p>
                </div>
                <div className="data">
                    <img className="circle_icon" src={Humidity_icon} width="50px" />
                    <p>{weatherData.humidity} %</p>
                </div>
                <div className="data">
                    <img className="circle_icon" src={Wind_icon} width="50px" />
                    <p>{windData.speed} km/h</p>
                </div>
            </div>
            <Map location={location} />
        </div>
    );
}

export default Home;