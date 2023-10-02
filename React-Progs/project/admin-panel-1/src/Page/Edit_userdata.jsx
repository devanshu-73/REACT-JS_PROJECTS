/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Edit_userdata = () => {
    const redirect = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/user/${id}`);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function validation() {
        var result = true;
        if (data.username === "") {
            alert('username is empty');
            result = false;
        }
        if (data.email === "") {
            alert('email is empty');
            result = false;
        }
        if (data.phone === "") {
            alert('phone is empty');
            result = false;
        }
        if (data.password === "") {
            alert('password is empty');
            result = false;
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, data);
            if (res.status === 200) {
                setData({ ...data, username: "", email: "", phone: "", password: "" });
                alert('Update success');
                return redirect('/manageUser')

            }
        }
    }
    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                <div className="row " >
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h5>Edit User Data</h5>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" value={data.username} name='username' className="form-control" onChange={onchange} placeholder="User Name " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" value={data.email} className="form-control" name='email' onChange={onchange} placeholder="Your Email " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="number" value={data.phone} className="form-control" name='phone' onChange={onchange} placeholder="Your phone " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" value={data.password} className="form-control" name='password' onChange={onchange} placeholder="Your Password" />
                                </div>
                                <button type='submit' onClick={onsubmit} className="btn btn-primary w-100 py-3">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit_userdata
