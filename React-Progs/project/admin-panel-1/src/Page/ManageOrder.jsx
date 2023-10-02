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
  const fetch = async () => {
    // Axios.........
    const res = await axios.get(`http://localhost:3000/order`);
    setUsers(res.data);
  }
  const onDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/order/${id}`);
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
              <h1 className="page-head-line">Order Table</h1>
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
                          <th>#</th>
                          <th>Order No.</th>
                          <th>Name</th>
                          <th>Rooms</th>
                          <th>Price</th>
                          <th>Edit/Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user) => (
                            <tr>
                              <td>{user.id}</td>
                              <td>{user.order_no}</td>
                              <td>{user.username}</td>
                              <td>{user.rooms}</td>
                              <td>{user.price}</td>
                              <td>
                                <button type="submit" className="btn btn-success">
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
  )
}

export default ManageUser