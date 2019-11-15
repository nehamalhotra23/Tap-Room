import React from "react";
import cover from '../Assets/Img/cover.jpg';


function Header() {
  var coverPic = {
    width: "100%",
    height: "50%",
    backgroundPosition:"center",
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    position: "relative",
    top: "0",
    left: "0",

  }
 

  var heroText = {
  textAlign: "center",
  position: "absolute",
  top:"5%",
  left: "40%",
  opacity: "0.6",
  color: "white",
  fontSize: "80px",
 
  }
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <img src={cover} style={coverPic} />
          <h1  style={heroText}>Square Space</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;