import React from 'react';
import Login from '../Assets/Img/Login.png';
import { Link } from 'react-router-dom';


function NewEmployee() {
  var image = {
    height: '700px',
    width: '600px',
    border: 'solid grey',
    borderRadius: '15px',
  };
  var background = {
    backgroundColor: '#ffae42',
    color: 'brown',
    marginTop: '300px',
  };
  var form = {
    marginTop: '30px',
  };
  return (

    <div style={background} className="row">
      <div className="col-md-6">
        <img style={image} src={Login} />
      </div>
      <div style={form} className="form-group col-md-6">
        <h1>Create Employee Account: </h1><br />
        <input type="text" placeholder="First Name" className="form-control" /><br />
        <input type="text" placeholder="Last Name" className="form-control" /><br />
        <input type="text" placeholder="Year of joining" className="form-control" /><br />
        <button type="submit" className="btn btn-secondary">Create Account</button><hr />
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <button className="btn btn-secondary">Home</button>
          </a><hr />
          <Link class="navbar-brand" to="SignIn">
            <button className="btn btn-secondary">SignIn</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default NewEmployee;