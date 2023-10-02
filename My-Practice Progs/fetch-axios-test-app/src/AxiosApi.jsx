import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosApi = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }, [])
    return (
        <div>
            <ul>
                <table border={1}>
                    <thead>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (

                                <tr>
                                    <td>  {user.id} </td>
                                    <td>{user.username}</td>
                                    <td> {user.email}</td>
                                </tr>


                            ))}
                    </tbody>
                </table>
            </ul>
        </div>
    )
}

export default AxiosApi
