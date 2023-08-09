import { useContext } from "react";
import Weather from "../contexts/Weather";

function calculateWindDirection(deg) {
  return ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'][Math.round(deg / 11.25 / 2)];
}

export default function TodayWeather({unit}) {
  const weather = useContext(Weather);

  const weatherMessageMain = weather ? weather.list[0].weather[0].main : "";
  const weatherMessageSub = weather ? weather.list[0].weather[0].description :  "";

  const icon = weather ? weather.list[0].weather[0].icon :  "";
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const currTemperture = weather ? weather.list[0].main.temp : "";

  const windSpeed = weather ? weather.list[0].wind.speed : "";
  const windDirection = calculateWindDirection(weather ? weather.list[0].wind.deg : 0)

  const humidity = weather ? weather.list[0].main.humidity : 0;

  const maxTemp = weather ? weather.list[0].main.temp_max : 0;
  const minTemp = weather ? weather.list[0].main.temp_min : 0;

  return (
    <div className="today-weather-container">
      <div className="today-weather">
        {weatherMessageMain} - {weatherMessageSub}
      </div>
      <div className="today-weather-details">
        <img
          src={iconUrl}
        ></img>
        <span>{currTemperture} ° {unit}</span>
        <div className="details-container">
          <span>Max/Min: {maxTemp} / {minTemp} </span>
          <span>Humidity: {humidity} % </span>
          <span>Wind Speed: {windSpeed} m/s {windDirection} </span>
        </div>
      </div>
    </div>
  );
}
