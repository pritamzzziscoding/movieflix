import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPages";
import { getProductData, getProductDetails } from "./apis/GetApiData";
import { MovieDetails } from "./pages/MovieDetails";

export const App = () => {
    const router = createBrowserRouter([
    
        {
            path: "/",
            element: <AppLayout />,
            errorElement : <ErrorPage />, //Great Way
            children: [
                {
                    path: "/",
                    element: <Home />,
                    action: contactData,
                },
                {
                    path: "/about",
                    element: <About />,
                    action: contactData,
                },
                {
                    path: "/movie",
                    element: <Movie />,
                    action: contactData,
                    loader: getProductData,
                },
                {
                    path: "/movie/:movieID",
                    element: <MovieDetails />,
                    action: contactData,
                    loader: getProductDetails
                },
                {
                    path: "/contact",
                    element: <Contact />,
                    action: contactData
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />
}

