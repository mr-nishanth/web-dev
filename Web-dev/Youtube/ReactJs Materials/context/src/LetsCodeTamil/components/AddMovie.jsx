import { useContext, useState } from "react";
import { MovieContext } from "./context/MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const initialState = { name: "", price: "" };
  const [addMovie, setAddMovie] = useState(initialState);
  const handleChange = (e) => {
    setAddMovie((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      id: Date.now(),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, addMovie]);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="center">Add Movies</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a movie"
          value={addMovie.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a price"
          value={addMovie.price}
          name="price"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-block">
          Add Movies
        </button>
      </div>
    </form>
  );
};
export default AddMovie;
