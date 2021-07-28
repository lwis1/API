import axios from 'axios'
import {useEffect, useState} from 'react'
import './style.css'
const UserList=()=>{
    const [state,setState]=useState([])
    useEffect(()=>axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setState(res.data)),[])
    return(
        <div className="users">
            <h1>UserList</h1>
            <table>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>
               {state.map(({name,email,phone})=><tr><td>{name}</td>
                                             <td>{email}</td>
                                             <td>{phone}</td>
               
                                           </tr>)}
            </table>
            
            
            
        </div>
    )
}
export default UserList