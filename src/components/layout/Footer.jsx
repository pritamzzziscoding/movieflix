import { Form, NavLink } from "react-router-dom"

export const Footer = () => {
    return <footer className="footer grid md:grid-cols-2 text-xl gap-10">
        <div className="grid gap-10 grid-cols-3">
            <ul>
                <li><NavLink className="text-blue-50" to="/">home</NavLink></li>
                <li><NavLink className="text-blue-50" to="/about">about</NavLink></li>
                <li><NavLink className="text-blue-50" to="/movie">movie</NavLink></li>
                <li><NavLink className="text-blue-50" to="/contact">contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink className="text-blue-50" to="/">home</NavLink></li>
                <li><NavLink className="text-blue-50" to="/about">about</NavLink></li>
                <li><NavLink className="text-blue-50" to="/movie">movie</NavLink></li>
                <li><NavLink className="text-blue-50" to="/contact">contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink className="text-blue-50" to="/">home</NavLink></li>
                <li><NavLink className="text-blue-50" to="/about">about</NavLink></li>
                <li><NavLink className="text-blue-50" to="/movie">movie</NavLink></li>
                <li><NavLink className="text-blue-50" to="/contact">contact</NavLink></li>
            </ul>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-sky-50 font-bold">Subscribe to our newsletter</p>
            <Form method="POST" action="">
                <label htmlFor="email" className="text-green-600">Monthly digest of what's new and exciting from us.</label>
                <input className="bg-sky-50 w-[60%] text-blue-950" type="email" name="email" id="email" required autoComplete="off"/>
                <button type="submit" className="bg-green-600">Subscribe</button>
            </Form>
        </div>
    </footer>
}
