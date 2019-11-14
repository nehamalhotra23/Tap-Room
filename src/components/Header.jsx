import React from "react";
import cover from '../Assets/Img/cover.jpg';


function Header(){
  var coverPic = {
    width:"100%",
    height:"50%",
    overflow:"hidden",
    position:"absolute",
    top:"0",
    left:"0",

  }
  return (
    <div>
    <img src={cover} style={coverPic}/>
    <h1>Square Space</h1>
    </div>
  );
}

export default Header;