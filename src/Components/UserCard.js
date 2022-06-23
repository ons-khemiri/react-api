import React from "react";
import { Card } from "react-bootstrap";


function UserCard({user}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"/>
    <Card.Body>
      <Card.Title>User</Card.Title>
      <Card.Text>id : {user.id}</Card.Text>
      <Card.Text>name : {user.name}</Card.Text>
      <Card.Text>email : {user.email}</Card.Text>
      <Card.Text>phone : {user.phone}</Card.Text>
      </Card.Body>
  </Card>
  </div>
      );
}


export default UserCard;
