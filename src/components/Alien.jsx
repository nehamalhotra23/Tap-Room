import React from 'react';
import PropTypes from 'prop-types';


function Alien(props) {
    var imageSize = {
        height: "200px",
        width: "200px",
    }
    var body = {
        marginLeft: "300px",
        marginRight: "160px",
    }


    return (
        <div>
            <div className="card" style={body}>
                <img style={imageSize} src={props.photo} src={props.photo} className="card-img-top" ></img>
                <div className="card-body">
                    <p className="card-text"> <p>Name: {props.name}</p>
                        <p>Bio: {props.bio}</p></p>

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

