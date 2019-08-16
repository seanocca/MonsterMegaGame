/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Card, Row, Col, Image,
} from 'react-bootstrap';
import FBLogo from '../images/facebook.png';
import InstaLogo from '../images/instagram.png';
import YTLogo from '../images/youtube.png';
import PatLogo from '../images/patreon.png';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <Card className="pagination-centered custom-footer">
        <Row
          className="justify-content-md-center"
          style={{ marginLeft: '0', marginRight: '0' }}
        >
          <Col md="auto" sm={6} xs={12}>
            <Card.Text className="text-center">Brisbane, Australia</Card.Text>
            <Card.Text className="text-center">
              halfhuman@halfmonstergames.com
            </Card.Text>
          </Col>
          <Col md="auto" sm={6} xs={12}>
            <Card.Text className="text-center">Contact Us!</Card.Text>
            <Card.Text className="text-center">
              <a href="https://facebook.com/HalfMonsterGames">
                <Image
                  src={FBLogo}
                  thumbnail
                  width="40"
                  height="40"
                  className="custom-footer-socials"
                />
              </a>
              <a href="https://www.instagram.com/halfmonstergames/">
                <Image
                  src={InstaLogo}
                  thumbnail
                  width="40"
                  height="40"
                  className="custom-footer-socials"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCPm1k8Gy3otn7fUZGaFFy5Q">
                <Image
                  src={YTLogo}
                  thumbnail
                  height="40"
                  className="custom-footer-socials"
                />
              </a>
              <a href="https://www.patreon.com/jackfordmorgan">
                <Image
                  src={PatLogo}
                  thumbnail
                  width="40"
                  height="40"
                  className="custom-footer-socials"
                />
              </a>
            </Card.Text>
          </Col>
        </Row>
        <Card.Footer className="text-muted text-center custom-footer-card">
          &copy; 2019 by Half-Monster Games
        </Card.Footer>
      </Card>
    );
  }
}

export default Footer;
