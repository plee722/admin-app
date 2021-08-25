import React from "react";
import NavigationBar from "./Navbar";
import Routes from "./Routes";
import { Container } from "../componentStyles";

const App = () => {
  return (
    <Container>
      <NavigationBar />
      <Routes />
    </Container>
  );
};

export default App;
