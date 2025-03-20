import { NavLink, useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return <>
        <h1 className="text-4xl">Page do not......</h1>
        <button className="btn bg-green-500 text-3xl explore rounded-xl" onClick={handleGoBack}>Go to Previous</button>
    </>
}