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
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  year: PropTypes.string,
};

export default Employees;
