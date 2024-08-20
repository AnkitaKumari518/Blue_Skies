import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 40.96,
        humidity: 66,
        temp: 33.96,
        tempMax: 33.96,
        tempMin: 33.05,
        weather: "haze",
        wind: 3.09
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Blue Skies</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}