import React from 'react';
import PropTypes from 'prop-types';


function Alien(props) {
    var imageSize = {
        height: "400px",
        width: "400px",
    }
    var card = {
     marginLeft: "400px",
    }
    var body = {
        backgroundColor: "brown",
    }

   
    return (
      
         <div className="card" style={card}  style={body}>
                <img style={imageSize} src={props.photo} src={props.photo} className="card-img-top" ></img>
                <div className="card-body">
                <p className="card-text"> <p>Name: {props.name}</p>
                <p>Bio: {props.bio}</p></p>
               
                </div>
            </div>
      
        
    );
}

Alien.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    photo: PropTypes.string,
};

export default Alien;

