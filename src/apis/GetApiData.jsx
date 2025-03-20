export const getProductData = async () => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=avengers&apikey=${import.meta.env.VITE_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


export const getProductDetails = async ({ params }) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${params.movieID}&apikey=${import.meta.env.VITE_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}