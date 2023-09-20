
/* 
* 1.declare a state to hld the data
* 2.useEffect with the call back and dependency array
* 3. use fetch to load data
 */

import { useEffect, useState } from "react"

export default function Users () {
    const [users,setUsers] = useState([])
    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
} 