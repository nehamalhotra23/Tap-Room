import React from 'react';
import Navbar from './Navbar';
import KombuchaList from './KombuchaList';

function Gt() {
    var space = {
      margin: "140px",
    }
    var cover = {
        backgroundColor: "#ffae42",
        color: "brown",
    }
    return (
        <div style={cover}>
            <Navbar/>
        <div style={space}><KombuchaList /></div>
        </div>
    );
}

export default Gt;