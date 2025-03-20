import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
    const navigation = useNavigation()
    
    if(navigation.state === 'loading'){
        return <h1 className="text-4xl">Loading.............</h1>
    }
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}