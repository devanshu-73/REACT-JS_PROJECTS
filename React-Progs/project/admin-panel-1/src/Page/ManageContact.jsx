/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import axios from 'axios'
function ManageUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3000/user")
        //   .then((response) => response.json())
        //   .then((data) => setUsers(data));
        fetch();
    }, []);
    // Axios.........
    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/contact');
        setUsers(res.data);
    }
    const onDelete = async (id) => {
        console.log(1);
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        if (res.status == "200") {
            alert('success...');
            fetch();
        }

    };
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Contact Table</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                    <th>Edit/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.subject}</td>
                                                            <td>{user.message}</td>
                                                            <td>
                                                                <button type="submit" className="btn btn-success" >
                                                                    Edit
                                                                </button>
                                                                <button type="submit" className="btn btn-danger" onClick={() => onDelete(user.id)} >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE-INNER  */}
            </div>
        </div>
    );
}

export default ManageUser;
