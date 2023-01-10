import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/movie/trending`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setMovies(data.data);
        }
      });
  }, []);

  return (
    <div className="App">
      <h1 className="text-center mb-5">Movie Apps</h1>

      <div className="container">
        <div className="row">
          {movies &&
            movies.map((movie, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={movie.link.thumbnail}
                          alt={movie.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{movie.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
