import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetMoviesMutation } from "../../services/movieApi";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const [getMovies, { data }] = useGetMoviesMutation();

  useEffect(() => {
    if (query) {
      fetchMovie();
    }
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  console.log(`Data ${data}`);
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "570px",
        alignContent: "center",
        marginTop: "50px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 540,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Search Movie"
          value={query}
          onChange={handleSearch}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="Search">
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};
export default AddMovie;
