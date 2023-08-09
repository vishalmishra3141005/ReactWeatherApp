import { useContext } from "react"
import Weather from "../contexts/Weather"

export default function CityCountry() {

    const weather = useContext(Weather);
    console.log(weather);
    return (
        <div className="city-country-container">
            {weather?.city?.name}, {weather?.city?.country}
        </div>
    )
}