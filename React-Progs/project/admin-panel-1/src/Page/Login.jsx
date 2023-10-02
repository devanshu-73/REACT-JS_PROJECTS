/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [password, setPassword] = useState('');

    const handlenameChange = (e) => {
        setname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/admin');
            const userData = await response.json();

            const user = userData.find((user) => user.name === name && user.password === password);

            if (user) {
                alert('Login successful');
                navigate('/dashboard');
                localStorage.setItem("uid", user.id);
                localStorage.setItem("username", user.name);
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row text-center " style={{ paddingTop: 100 }}>
                    <div className="col-md-12">
                        <img src="assets/img/logo-invoice.png" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form">
                                <hr />
                                <h3 className='text-center'>Enter Details to Login</h3>
                                <br />
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" name='name' value={name} onChange={handlenameChange} className="form-control" placeholder="Your Username " />
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" name='password' value={password} onChange={handlePasswordChange} className="form-control" placeholder="Your Password" />
                                </div>
                                <div className='text-center'>
                                    <button type="button" onClick={handleLogin} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="btn btn-primary">
                                        Login Now
                                    </button>
                                    {/* <Link to="/dashboard" className="btn btn-primary">Login Now</Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login