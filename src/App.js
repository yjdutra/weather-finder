import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [cityLat, setCityLat] = useState([]);
  const [cityLon, setCityLon] = useState([]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const SearchForecastWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=ce29c690f653f72ff0adbb3de5b6cb00&lang={pt}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => console.log(data.main));
  };

  const handleSearchCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=ce29c690f653f72ff0adbb3de5b6cb00`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setCityLat(data.map((e) => e.lat));
        setCityLon(data.map((e) => e.lon));

        SearchForecastWeather();
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href=" ">
          {" "}
          Weather Finder{" "}
        </a>
      </nav>

      <main className="container bg-secondary bg-opacity-25 rounded p-2">
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
            className="btn btn-primary btn-larg"
            onClick={handleSearchCity}
          >
            {" "}
            Search{" "}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
