import React from "react";
import cover from '../Assets/Img/cover.png';
function Home() {
    var image = {
     backgroundColor: "brown",
    }
    return (
      <div style={image}>
          <img src={cover}/>  
        </div>

    );
}
export default Home;

