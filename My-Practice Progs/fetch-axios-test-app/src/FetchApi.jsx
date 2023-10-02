import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
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

export default FetchApi
