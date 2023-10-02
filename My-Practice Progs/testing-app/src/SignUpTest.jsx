/* eslint-disable eqeqeq */
import axios from 'axios'
import React, { useState } from 'react'

const SignUpTest = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const onchange = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(data);
    }
    function validation() {
        var result = true;
        if (data.username == "") {
            alert("Username is empty");
            result = false;
        }
        if (data.password == "") {
            alert("Password is empty");
            result = false;
        }
        return result;
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post('http://localhost:3000/user', data);
            if (res.status == 201) {
                alert("success");
                setData({ ...data, username: "", password: "" });
            }
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Sign Up Form</h1>
            <hr />
            <hr />
            <form className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" className="form-control" value={data.username} onChange={onchange} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" className="form-control" value={data.password} onChange={onchange} />
                </div>
                <div className='mt-2 d-flex justify-content-center align-items-center'>
                    <button type="submit" onClick={onsubmit} className='btn btn-primary'>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpTest
