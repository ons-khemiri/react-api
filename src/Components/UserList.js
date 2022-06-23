import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import UserCard from './UserCard'


function UserList() {
    const [listOfUSer , setListOfUSer ] = useState([{}])
   useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setListOfUSer(res.data) )
      .catch(error=>error)
},[] )
return(
    <div>{listOfUSer.map(el=> <UserCard user={el}/>)}</div>
)
}
export default UserList