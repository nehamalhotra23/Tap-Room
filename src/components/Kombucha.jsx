import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props) {
    return (
        <div>
            <img src={props.photo} src={props.photo}></img>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Brand: {props.brand}</p>
            <p>description: {props.flavour}</p>

        </div>

    );
}
Kombucha.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    flavour: PropTypes.string,
    photo: PropTypes.string,
};

export default Kombucha;