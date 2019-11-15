import React from 'react';
import Login from '../Assets/Img/Login.png';
import { Link } from 'react-router-dom';


function SignIn() {
    var image = {
        height: '600px',
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
        marginTop: '120px',
    };

    return (

        <div style={background} className="row">
            <div className="col-md-6">
                <img style={image} src={Login} />
            </div>
            <div style={form} className="form-group col-md-6">
                <h1> Employee Login:</h1>
                <input type="text" placeholder="@UserName" className="form-control" /> <br />
                <input placeholder="Password" type="text" className="form-control" /><br />
                <button type="submit" className="btn btn-secondary">SignIn</button><hr />
                <nav class="navbar navbar-light bg-light">
                    <Link class="navbar-brand" to="NewEmployee">
                        <button className="btn btn-secondary">Create Account</button><hr />
                    </Link>
                    <a class="navbar-brand" href="#">
                        <button className="btn btn-secondary">Home</button> </a>
                </nav>
            </div>
        </div>
    );
}

export default SignIn;