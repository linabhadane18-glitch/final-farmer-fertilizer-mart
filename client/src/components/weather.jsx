import { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <section className="weather-section">
      <h1 className="site-title">🌦️ Weather Forecast</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>

          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <p className="temp">{weather.main.temp} °C</p>
          <p className="desc">{weather.weather[0].description}</p>

          <div className="weather-grid">
            <div>
              🌡️ Feels Like
              <span>{weather.main.feels_like} °C</span>
            </div>

            <div>
              💧 Humidity
              <span>{weather.main.humidity}%</span>
            </div>

            <div>
              🌬️ Wind
              <span>{weather.wind.speed} m/s</span>
            </div>

            <div>
              🔽 Pressure
              <span>{weather.main.pressure} hPa</span>
            </div>

            <div>
              🔺 Max Temp
              <span>{weather.main.temp_max} °C</span>
            </div>

            <div>
              🔻 Min Temp
              <span>{weather.main.temp_min} °C</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Weather;
