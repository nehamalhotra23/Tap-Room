import React from 'react';
import Header from './Header';
import KombuchaList from './KombuchaList';

function MainPage() {
    var space = {
      margin: "140px",
    }
    var cover = {
        backgroundColor: "grey",
    }
    return (
        <div style={cover}>
            <Header />
        
            <div style={space}><KombuchaList /></div>
        </div>
    );
}

export default MainPage;