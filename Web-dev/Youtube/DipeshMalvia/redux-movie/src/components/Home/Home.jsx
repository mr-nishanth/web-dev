import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
import "./Home.scss"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"
import { useDispatch } from "react-redux"
import { addMovies } from "../../features/movies/movieSlice"


const Home = () => {
    const movieText = "Harry"
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovie = async () => {

            const res = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
                .catch(err => console.log(`Error : ${err}`))

            // console.log(`The result was: `, res)
            dispatch(addMovies(res.data))
        }

        fetchMovie()
    }, [])

    return (
        <>
            <div className="banner-img">

            </div>
            <MovieListing />
        </>
    )
}

export default Home