import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import FBLogo from "./../images/facebook.png";
import InstaLogo from "./../images/instagram.png";
import YTLogo from "./../images/youtube.png";
import PatLogo from "./../images/patreon.png";

const sticky_footer = {
  position: "absolute",
  width: "100%",
  bottom: 0,
  left: 0,
  fontSize: "0.75rem"
};

class Footer extends Component {
  render() {
    return (
      <Card bg="light" style={sticky_footer} className="pagination-centered">
        <Row
          className="justify-content-md-center"
          style={{ marginLeft: "0", marginRight: "0" }}
        >
          <Col md="auto">
            <Card.Text className="text-center">Brisbane, Australia</Card.Text>
            <Card.Text className="text-center">
              halfhuman@halfmonstergames.com
            </Card.Text>
          </Col>
          <Col md="auto">
            <Card.Text className="text-center">Contact Us!</Card.Text>
            <Card.Text className="text-center">
              <a href="https://facebook.com/HalfMonsterGames">
                <Image
                  src={FBLogo}
                  thumbnail
                  width="50"
                  height="50"
                  style={{ padding: "5px 5px", border: "none" }}
                />
              </a>
              <a href="https://www.instagram.com/halfmonstergames/">
                <Image
                  src={InstaLogo}
                  thumbnail
                  width="50"
                  height="50"
                  style={{ padding: "5px 5px", border: "none" }}
                />
              </a>
              <a href="https://www.youtube.com/channel/UCPm1k8Gy3otn7fUZGaFFy5Q">
                <Image
                  src={YTLogo}
                  thumbnail
                  width="50"
                  height="50"
                  style={{ padding: "5px 5px", border: "none" }}
                />
              </a>
              <a href="https://www.patreon.com/jackfordmorgan">
                <Image
                  src={PatLogo}
                  thumbnail
                  width="50"
                  height="50"
                  style={{ padding: "5px 5px", border: "none" }}
                />
              </a>
            </Card.Text>
          </Col>
        </Row>
        <Card.Footer
          className="text-muted text-center"
          style={{ fontSize: "0.6rem", padding: "0.5rem 1.25rem" }}
        >
          &copy; 2019 by Half-Monster Games
        </Card.Footer>
      </Card>
    );
  }
}

export default Footer;
