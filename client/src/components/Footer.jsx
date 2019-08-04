import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import FBLogo from './../images/facebook.png';
import InstaLogo from './../images/instagram.png';
import YTLogo from './../images/youtube.png';
import PatLogo from './../images/patreon.png';


const sticky_footer = {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    fontSize: '0.8rem'
};

class Footer extends Component {
    render() {
        return (
            <Card bg="light" style={sticky_footer} class="pagination-centered">
                <Row>
                    <Col></Col>
                    <Col md={{ span: 6, offset: 2 }}>
                        <Card.Text>
                            Brisbane, Australia
                        </Card.Text>
                        <Card.Text>
                            halfhuman@halfmonstergames.com
                        </Card.Text>
                    </Col>
                    <Col md={{ span: 6, offset: 2 }}>
                        <Card.Text>
                            Contact Us!
                        </Card.Text>
                        <Card.Text inline="true">
                            <a href="https://facebook.com/HalfMonsterGames"><img src={FBLogo} alt="Facebook" height="40" width="40" style={{padding: '5px 5px'}} /></a>
                            <a href="https://www.instagram.com/halfmonstergames/"><img src={InstaLogo} alt="Instagram" height="40" width="40" style={{padding: '5px 5px'}}/></a>
                            <a href="https://www.youtube.com/channel/UCPm1k8Gy3otn7fUZGaFFy5Q"><img src={YTLogo} alt="Youtube" height="40" width="40" style={{padding: '5px 5px'}}/></a>
                            <a href="https://www.patreon.com/jackfordmorgan"><img src={PatLogo} alt="Patreon" height="40" width="40" style={{padding: '5px 5px'}}/></a>
                        </Card.Text>
                    </Col>
                    <Col></Col>
                </Row>
                <Card.Footer clasName="text-muted" style={{textAlign: 'center', padding: '0.5rem 1.25rem'}}>&copy; 2019 by Half-Monster Games</Card.Footer>
            </Card>);
    }
}

export default Footer;