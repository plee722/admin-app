import React from "react";
import { Link } from "react-router-dom";
import {ImageContainer, Col, HomeImage} from '../componentStyles'

const Dashboard = ({ text, path, image}) => {
  return (
    <ImageContainer>
      <Col>
      <Link to={`/${path}`}>
        <HomeImage src={image} alt="Category" />
      </Link>
      </Col>
      <Col>
        {text}
      </Col>
    </ImageContainer>
  );
};

export default Dashboard