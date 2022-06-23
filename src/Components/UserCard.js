import React from "react";


function UserCard({ user }) {
  return (
    <div
      style={{
        backgroundColor:" pink",
        borderRadius: 10,
        width:300,
        padding:20,
        margin:20,
        height:200,
      fontSize:" large",
    }}
    >
      <ul>
      <img  style={{width:"90px"}}src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" alt="person" />
        <li>id : {user.id}</li>
        <li>username : {user.username}</li>
        <li>email : {user.email}</li>
        <li>phone : {user.phone}</li>
      </ul>
    </div>
  );
}

export default UserCard;
