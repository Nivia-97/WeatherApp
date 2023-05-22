import sunny from "./images/sunny.jpg";
import snowy from "./images/snowy.jpg";
import rainy from "./images/rainy.png";
import foggy from "./images/fog.jpg";
import cloudy from "./images/cloudy.jpg";
import nightCloudy from "./images/nightCloudy.jpg";
import nighty from "./images/night.jpg";

import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./components/WeatherData";

function App() {

  const [city, setCity] = useState('kerala');
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState(null);
  const [isActive, setIsActive] = useState(true);


  function handleChange(e) {
    setCityName(e.target.value);
  }

  function handleClick() {
    cityName !== "" && setCity(cityName);
    setCityName("");
    setIsActive(false);
  }

  function handleCurrentLocation() {
    setCity('kerala');
    setIsActive(true);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city);
      setWeather(data);
    };

    fetchWeatherData();
  }, [city]);




  // backgroundImage
  var image;

  if (weather && weather.main){
    if (weather.main === "Thunderstorm" || weather.main === "Drizzle" || weather.main === "Rain") {
      image = rainy;
    }
    else if (weather.main === "Snow") {
      image = snowy;
    }
    else if (weather.main === "Mist" || weather.main === "Smoke" || weather.main === "Haze" || weather.main === "Fog") {
      image = foggy;
    }
    else if (weather.main === "Clear") {
      image = (weather.icon.includes("n"))? nighty : sunny;
    }
    else {
      image = (weather.icon.includes("n"))? nightCloudy : cloudy;
    }
  }


  return <>
    <div className="app" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}>
      <div className="overlay">
        {weather && <div className="container">
          <div className="section section-inputs">
            <div className="input">
              <input onChange={handleChange} type="text" name="city" placeholder="Enter city.." value={cityName} />
              <button onClick={handleClick}><i class="uil uil-search"></i></button>
            </div>
            <button onClick={handleCurrentLocation} style={{ color: isActive ? "deepskyblue" : "white" }}>
              <i class="uil uil-map-marker"></i>
            </button>
          </div>
          <div className="section section-temperature">
            <div className="temp">
              <h1>{`${weather.temp.toFixed()}°C`}</h1>
            </div>
            <div className="city-info">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <h3>{`${weather.description}`}</h3>
              <img src={`${weather.iconURL}`} alt="weather-icon" />
            </div>
          </div>
          {/* bottom description */}
          <Descriptions weather={weather} />
        </div>
        }
      </div>
    </div>
  </>;
}

export default App;
