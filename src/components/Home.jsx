import React from "react";
import cover from '../Assets/Img/cover.png';
function Home() {
    var image = {
     width: "1300px",
    }
    return (
        <div>
          <img style={image} src={cover}/>  
        </div>

    );
}
export default Home;

