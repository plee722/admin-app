import React from "react";
import { Link } from "react-router-dom";
import {List, ListItem, Container, HomeHeader, Row} from '../componentStyles'

const NavigationBar = () => {

    return (
        <Container>
            <Row>
            <img src="/logo.png"
                width="75"
                height="75"
                alt="Walmart logo"
                />
                <HomeHeader>Walmart inHome</HomeHeader>
            </Row>
            
            
                    <List>
                        <Link to="/">
                            <ListItem>Home</ListItem>
                        </Link>
                        <Link to="/users">
                            <ListItem>Users</ListItem>
                        </Link>
                        <Link to="/items">
                            <ListItem>Items</ListItem>
                        </Link>
                        <Link to="/orders">
                            <ListItem>Orders</ListItem>
                        </Link>
                        <Link to="/add">
                            <ListItem>Add Order</ListItem>
                        </Link>
                        <Link to="/update">
                            <ListItem>Edit Order</ListItem>
                        </Link>
                    </List>
        </Container>
    )
};

export default NavigationBar;
