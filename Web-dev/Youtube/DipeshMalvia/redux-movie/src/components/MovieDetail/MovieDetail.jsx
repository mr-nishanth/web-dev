import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShowDetails, removeSelectedMovieOrShowDetails } from "../../features/movies/movieSlice";
import "./MovieDetail.scss"



function MovieDetail() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShowDetails)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetails(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShowDetails())
        }
    }, [dispatch, imdbID])

    return (
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">
                    {data.Title}
                </div>
                <div className="movie-rating">
                    <span>IMDB Rating <em className="fa fa-star"> {data.imdbRating}</em></span>
                    <span>IMDB Votes <em className="fa fa-thumbs-up"> {data.imdbVotes}</em></span>
                    <span>Runtime <em className="fa fa-film"> {data.Runtime}</em></span>
                    <span>Year <em className="fa fa-calendar"> {data.Year}</em></span>
                </div>
                <div className="movie-plot">
                    {data.Plot}
                </div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Genres</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    )
}

export default MovieDetail