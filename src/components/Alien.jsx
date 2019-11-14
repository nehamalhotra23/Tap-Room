import React from 'react';
import PropTypes from 'prop-types';


function Alien(props) {
    var imageSize = {
        height: "400px",
        width: "400px",
    }
   
    return (
        <div>
            <div className="card" >
                <img style={imageSize} src={props.photo} src={props.photo} className="card-img-top" ></img>
                <div className="card-body">
                <p className="card-text"> <p>{props.name}</p>
                <p>{props.bio}</p></p>
               
                </div>
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

