import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShowDetails } from "../../features/movies/movieSlice";
import "./MovieDetail.scss"



function MovieDetail() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShowDetails)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetails(imdbID))
    }, [dispatch, imdbID])

    return (
        
    )
}

export default MovieDetail