import React, { useEffect, useState } from "react";
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


const Items = (props) => {
  const [data, setData] = useState({ items: [] });
  try {
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios("/api/items");
        setData(res.data);
      };
      fetchData();
    }, []);
  } catch (err) {
    console.error("Unable to fetch all users", err);
  }

  // Need to update Card img source to food images or create table to store food images
  return (
      <div id="container">
          <h1>Item List</h1>
          {data.items.map((item) => (
        <Card>
          <CardImg
            top
            src="https://joeschmoe.io/api/v1/random"
            alt="Random Avatar"
          />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardSubtitle tag="h6">ID #{item.id}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
      <Link to="/">
        <Button color="primary">Go to Homepage</Button>
      </Link>
      </div>
  )
};

export default Items