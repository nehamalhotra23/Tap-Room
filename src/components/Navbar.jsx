import React from 'react';
import { Link } from 'react-router-dom';
import { brotliDecompress } from 'zlib';

function Navbar() {

    var navbarAndanchor = {
        float: "left",
        display: "block",
        marginLeft: "200px",
        textAlign: "center",
        padding: "14px",
        textDecoration: "none",
        fontWeight: "bold",
    }
    return (
        <div >
            <div>
                <nav>

                    <Link style={navbarAndanchor} to="/" > Aliens </Link>
                    <Link style={navbarAndanchor} to="/AlienList" >About us</Link>
                    <Link style={navbarAndanchor} to="/Careers" >Careers</Link>


                </nav>
            </div>
        </div>

    );
}

export default Navbar;