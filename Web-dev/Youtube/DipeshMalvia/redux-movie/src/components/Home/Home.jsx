import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
import "./Home.scss"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"


const Home = () => {

    useEffect(() => {
        const movieText = "Harry"
        const fetchMovie = async () => {

            const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch(err => console.log(`Error : ${err}`))
            console.log(`The response was: `, response)
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