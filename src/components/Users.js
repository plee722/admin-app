import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageContainer, UsersImage, Col, PageHeader, Box , Row} from "../componentStyles";

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
    <Box>
      <PageHeader>User Info</PageHeader>
      <Row>
      {data.users.map((user, i) => (
        <ImageContainer key={i}> 
            <Col>
            <UsersImage
            top
            src='https://joeschmoe.io/api/v1/random'
            alt="Random Avatar"
          />
            </Col>
          <Col>
            {user.name} - ID #{user.id}
          </Col>
        </ImageContainer>
      ))}
      </Row>
    </Box>
  );
};

export default Users;
