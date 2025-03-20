import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
    const[status, setStatus] = useState(false)
    function handleButton(){
        setStatus(!status)
    }
    return <>
    <header className="navbar">
        <div className="header-title font-bold text-green-600"><p>MovieFlix</p></div>
        <div>
            <ul className={status ? "header-menu-open" : "header-menu-close"}>
                <li><NavLink className="navigator" to="/" >Home</NavLink></li>
                <li><NavLink className="navigator" to="/about">About</NavLink></li>
                <li><NavLink className="navigator" to="/movie">Movie</NavLink></li>
                <li><NavLink className="navigator" to="/contact">Contact</NavLink></li>
            </ul>
            <div className="hamburger" onClick={handleButton}><GiHamburgerMenu /></div>
        </div>
    </header>
    </>
}