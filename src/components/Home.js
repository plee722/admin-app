import React, { useState } from "react";
import { dashboardInfo } from './utils'
import Dashboard from './Dashboard'
import { Container , Row } from '../componentStyles'


const Home = () => {
    const [cards] = useState({ dashboardInfo })

    return (
        <Container>
            <Row>
                {cards.dashboardInfo.map((card) => (
                    <Dashboard 
                        key={card.path}
                        path={card.path}
                        image={card.image}
                        text={card.text}
                    />
                ))}
            </Row>
            </Container>
    );
}

export default Home
