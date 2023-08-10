import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import './index.css'
import "./App.css";
import "./styles/components/Shortcuts.css";
import "./styles/components/Inputs.css";
import "./styles/components/CityCountry.css";
import "./styles/components/TodayWeather.css";
import "./styles/components/Loading.css";
import "./styles/components/DailyForecast.css";
import "./styles/components/DailyTile.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
