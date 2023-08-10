import { useContext } from "react";
import DailyTile from "./DailyTile";

import Weather from "../contexts/Weather";

export default function DailyForecast() {

  const weather = useContext(Weather);

  const weatherData = weather ? weather.list : null;

  // console.log(weatherData);

  
  return (
    <div className="daily-forecast-container">
      <div style={{paddingLeft: "20px"}}>Daily Forecast</div>
      <div className="forecast-container">

        { weatherData && weatherData.map(function(weatherDaily) {
          const day = new Date(weatherDaily.dt * 1000).getDay();
          const temp = weatherDaily.main.temp;
          const icon = weatherDaily.weather[0].icon;
          return <DailyTile day={day} icon={icon} temp={temp}/>
        })}
        
      </div>
    </div>
  );
}
