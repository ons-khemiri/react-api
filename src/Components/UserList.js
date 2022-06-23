import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import UserCard from "./UserCard";


function UserList() {
    const [users , setUsers ] = useState([{}]);
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>setUsers(res.data))
      .catch((err)=>err);
    }, []);
return(
    <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}>{users.map(el=> <UserCard user={el}/>)}</div>
)
}
export default UserList