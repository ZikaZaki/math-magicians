import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Math Magician</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/quote">Quote</Link>
            </div>
        </nav>
    );
}

export default Navbar;