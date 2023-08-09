import Inputs from "./components/Inputs";
import Shortcuts from "./components/Shortcuts";
import CityCountry from "./components/CityCountry";
import TodayWeather from "./components/TodayWeather";

export default function App() {
  return (
    <div className="app-container">
      <Shortcuts />
      <Inputs />
      <CityCountry />
      <TodayWeather />
    </div>
  );
}
