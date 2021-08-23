import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

const Users = (props) => {
  const [data, setData] = useState({ users: [] });
  try {
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios("/api/users");
        setData(res.data);
      };
      fetchData();
    }, []);
  } catch (err) {
    console.error("Unable to fetch all users", err);
  }

  return (
    <div id="container">
      <h1>Customer Info</h1>
      {data.users.map((user) => (
        <Card>
          <CardImg
            top
            src="https://joeschmoe.io/api/v1/random"
            alt="Random Avatar"
          />
          <CardBody>
            <CardTitle tag="h5">{user.name}</CardTitle>
            <CardSubtitle tag="h6">ID #{user.id}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
      <Link to="/">
        <Button color="primary">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default Users;
