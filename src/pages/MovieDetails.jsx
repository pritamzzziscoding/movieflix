import { NavLink, useLoaderData, useParams } from "react-router-dom"

export const MovieDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return <div className="box">
        <MovieDetail data={data}/>
    </div>
}

const MovieDetail = ({data}) => {
    return <div className="explore box grid lg:grid-cols-3 bg-gray-300 justify-center items-center gap-5">
        <img className="detail-img md:col-span-2 lg:col-span-1 h-[100%]" src={data.Poster} alt="movie-image" />
        <div className="md:col-span-2 flex flex-col gap-5 detail">
            <div className="text-4xl font-semibold text-center grid gap-2"><p>{data.Title}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Year: </p><p>{data.Year}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Rated: </p><p>{data.Rated}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Runtime: </p><p>{data.Runtime}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Genre: </p><p>{data.Genre}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Director: </p><p>{data.Director}</p></div>
            <div className="text-2xl grid grid-cols-2 gap-2"><p className="font-bold">Actors: </p><p>{data.Actors}</p></div>
            <div>
                <h3 className="text-3xl font-bold">PLOT</h3>
                <p className="text-2xl">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
            </div>
            <NavLink className="text-3xl rounded-xl bg-green-500 explore w-50" to={data.Website}>watch now</NavLink>
        </div>
    </div>
}