import Inputs from "./components/Inputs";
import Shortcuts from "./components/Shortcuts";
import CityCountry from "./components/CityCountry";

export default function App() {
  return (
    <div className="app-container">
      <Shortcuts />
      <Inputs />
      <CityCountry />
    </div>
  );
}
