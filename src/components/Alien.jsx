import React from 'react';
import PropTypes from 'prop-types';


function Alien(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.bio}</p>
            <img src={props.photo}/>
        </div>
    );
}

 Alien.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string, 
    photo: PropTypes.string,
 };

 export default Alien;