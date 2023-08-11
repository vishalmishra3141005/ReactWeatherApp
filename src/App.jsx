import Inputs from "./components/Inputs";
import Shortcuts from "./components/Shortcuts";
import CityCountry from "./components/CityCountry";
import TodayWeather from "./components/TodayWeather";
import Loading from "./components/Loading";
import DailyForecast from "./components/DailyForecast";

import { useState, useEffect } from "react";

import Weather from "./contexts/Weather";
import SetWeather from "./contexts/SetWeather";

export default function App() {
  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState("ranchi");
  const [unit, setUnit] = useState("F");

  const [loading, setLoading] = useState(false);

  const fahapi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0983ce2c40cb27f099d8a7aa2dfac89&units=imperial`;

  const celapi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0983ce2c40cb27f099d8a7aa2dfac89&units=metric`;

  async function apiCaller() {
    let api = "";
    setLoading(true);
    if (unit === "F") {
      api = fahapi;
    } else {
      api = celapi;
    }

    try {
      let response = await fetch(api);
      let data = await response.json();
      if (data.cod !== "200") {
        setLoading(true);
      } else {
        // for ()
        let newList = [];
        for (let i = 0; i < 5; i++) {
          newList.push(data.list[8 * i]);
        }
        let newWeather = { ...data, list: newList };
        setLoading(false);
        setWeather(newWeather);
        // console.log(newWeather);
      }
      
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  useEffect(
    function () {
      apiCaller();
    },
    [city, unit]
  );

  return (
    <Weather.Provider value={weather}>
      <SetWeather.Provider value={setWeather}>
        <div className="app-container">
          <Shortcuts setCity={setCity} />
          <Inputs setUnit={setUnit} setCity={setCity} />
          {loading ? (
            <Loading />
          ) : (
            <>
              <CityCountry />
              <TodayWeather unit={unit} />
              <DailyForecast />
            </>
          )}
        </div>
      </SetWeather.Provider>
    </Weather.Provider>
  );
}
