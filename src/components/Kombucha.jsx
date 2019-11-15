import React from 'react';
import PropTypes from 'prop-types';

function Kombucha(props) {
    var card = {
        width: "300px",
        border: "solid",
        borderRadius: "0px",
        border: "solid 1px rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(54, 54, 54, .2)",
        webkitBoxShadow:" 4px 5px 5px - 3px #000000",
        boxShadow: "4px 5px 5px - 3px #000000",
        overflow: "hidden",
    }
    var image = {
        margin: "5 %",
        height: "200px",
        minHeight: "200px",
        overflow: "hidden",
        border: "solid 1px rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
       webkitBoxShadow: "0px 0px 6px - 2px #000000",
       boxShadow: "0px 0px 6px - 2px #000000",
    }
    return (
        <div>
            <div class="card" style={card}>
            <img style={image} src={props.photo} class="card-img-top" />
            <div class="card-body">
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Brand: {props.brand}</p>
            <p>description: {props.flavour}</p>
                </div>
            </div>

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

{/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
</div> */}