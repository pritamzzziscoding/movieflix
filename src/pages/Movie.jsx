import { useLoaderData } from "react-router-dom"
import { Card } from "../components/ui/Card";

export const Movie = () => {
    const data = useLoaderData()
    const movies = data.Search

    return <div className="box flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl md:text-7xl text-green-400 font-bold shadow-lg rounded-4xl">Top Movies</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center gap-4">
            {
                movies.map((movie)=>{
                    return <Card key={movie.imdbID} imdbID={movie.imdbID} img={movie.Poster}/>
                })
            }
        </ul>
    </div>
}