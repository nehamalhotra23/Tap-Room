import React from 'react';
import Navbar from './Navbar';
import RemedyList from './RemedyList';

function MainPageRemedy() {
    var space = {
        margin: "140px",
    }
    var cover = {
        backgroundColor: "#ffae42",
        color: "brown",
    }
    return (
        <div style={cover}>
            <Navbar />
            <div style={space}><RemedyList /></div>
        </div>
    );
}

export default MainPageRemedy;