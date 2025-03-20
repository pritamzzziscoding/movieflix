import { NavLink } from "react-router-dom"

export const Card = ({imdbID, img}) => {
    return <div className="card-container">
        <img src={img} alt="image" />
        <NavLink to={`/movie/${imdbID}`}><button className="text-2xl font-bold bg-green-500 watch w-[100%]">Watch Now</button></NavLink>
    </div>
}