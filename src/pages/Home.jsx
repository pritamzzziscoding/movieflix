import { NavLink } from "react-router-dom"

export const Home = () => {
    return <div className="home box w-[90%] flex flex-col justify-center items-center bg-opacity-50 gap-5">
        <h1 className="text-7xl text-center text-sky-50 font-bold">Welcome to MovieFlix</h1>
        <p className="text-3xl text-center text-sky-50 font-bold">Your one-stop destination for unlimited movies, shows, and entertainment.  
        Watch anywhere, anytime.</p>
        <NavLink className="explore text-4xl text-sky-50 bg-green-500 rounded-xl p-7" to="/movie">Explore</NavLink>
    </div>
}