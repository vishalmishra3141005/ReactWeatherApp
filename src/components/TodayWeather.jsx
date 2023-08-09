export default function TodayWeather() {
  return (
    <div className="today-weather-container">
      <div className="today-weather">
        Clear
      </div>
      <div className="today-weather-details">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
        ></img>
        <span>T°</span>
        <div className="details-container">
          <span>Max/Min: </span>
          <span>Humidity:</span>
          <span>Wind Speed:</span>
        </div>
      </div>
    </div>
  );
}
