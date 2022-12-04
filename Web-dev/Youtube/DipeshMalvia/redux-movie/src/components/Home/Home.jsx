import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies } from "../../features/movies/movieSlice"
import MovieListing from "../MovieListing/MovieListing"
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
    }, [dispatch])


    return (
        <>
            <div className="banner-img">

            </div>
            <MovieListing />
        </>
    )
}

export default Home