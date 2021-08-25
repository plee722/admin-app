import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageContainer, HomeImage, Col, PageHeader, Box , Row} from "../componentStyles";


const Items = () => {
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

  return (
    <Box>
          <PageHeader>Item List</PageHeader>
          <Row>
          {data.items.map((item) => (
        <ImageContainer>
            <Col>
          <HomeImage
            top
            src="/broccoli.png"
            alt="Random Avatar"
          />
          </Col>
          <Col>
            {item.name} - ID #{item.id}
          </Col>
            </ImageContainer>
      ))}
      </Row>
      </Box>
  )
};

export default Items