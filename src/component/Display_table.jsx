import React from 'react'
import { useState, useEffect } from 'react'

export default function Display_table() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://jsonplaceholder.typicode.com/users")
                .then(result => result.json())
                .then((res) =>
                    setData(res)
                    // console.log(res[0].id)
                )
        }
        fetchData()

    }, [])

    var loadData = data.map((user) => {
        console.log(user.id)
        return (
            <tr>
                
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.address.street} {user.address.suite} </td>
                
            </tr>
        )
    })

    return (
        <div className='container table_users'>
            <table className="table table-striped table-dark">
                <thead > 
                    <tr>
                        <th>Id User</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Adress</th>
                       
                    </tr>

                </thead>
                <tbody>
                    {loadData}
                </tbody>
            </table>
        </div>



    )

}

