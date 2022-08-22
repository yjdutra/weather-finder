import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce29c690f653f72ff0adbb3de5b6cb00&units=metric`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherForecast(data);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 ">
        <a className="navbar-brand text-white" href=" ">
          {" "}
          Weather Finder{" "}
        </a>
      </nav>

      <main className="container bg-secondary bg-opacity-25 rounded p-2 w-50">
        <div className="jumbotron">
          <h1>Find the weather forecast in your city !</h1>
          <p className="lead"> Enter your city name </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                className="form-control"
                value={city}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-larg mb-2"
            onClick={handleSearchCity}
          >
            {" "}
            Search{" "}
          </button>

          {weatherForecast ? (
            <ul className="list-group">
              <li className="list-group-item">
                {" "}
                Country: {weatherForecast.sys.country}{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Humidity: {weatherForecast.main.humidity} %{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Pressure: {weatherForecast.main.pressure} hPa
              </li>
              <li className="list-group-item">
                {" "}
                Temperature: {weatherForecast.main.temp} °C{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Fells Like: {weatherForecast.main.feels_like} °C{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Temperature Max: {weatherForecast.main.temp_max} °C{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Temperature Min: {weatherForecast.main.temp_min} °C{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Wind speed: {weatherForecast.wind.speed} m/s{" "}
              </li>
            </ul>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
