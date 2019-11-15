import React from 'react';
import PropTypes from 'prop-types';

function Employees(props) {
    return (
                <div>
                    <p>Name: {props.firstname}</p>
                    <p>Price: {props.lastname}</p>
                    <p>Year of Joining {props.year}</p>
                </div>
            );
}
Employees.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    year: PropTypes.string,
};

export default Employees;
