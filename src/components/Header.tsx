import Logo from "../assets/logo.svg";
import FB from "../assets/fb.svg";
import IG from "../assets/ig.svg";
import YT from "../assets/yt.svg";
import { Link, useLocation } from "react-router-dom";
import { Col, Flex, Row } from "antd";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed", location);
  }, [location]);
  return (
    <Row
      justify="space-around"
      align="middle"
      wrap={false}
      className={`border-b-2 border-black py-4 ${
        location.pathname === "/" ? "" : "bg-earthy"
      }`}
    >
      <Col>
        <Flex gap={20}>
          <img className="m-auto" src={FB} width="28" loading="lazy" />
          <img className="m-auto" src={IG} width="28" loading="lazy" />
          <img className="m-auto" src={YT} width="28" loading="lazy" />
          <Link to="/cinema">Cinema</Link>
          <p>TV</p>
          <p>VOD</p>
          <p>Streaming</p>
          <p>Schedule</p>
        </Flex>
      </Col>
      <Col>
        <img
          className="m-auto"
          src={Logo}
          alt="MOViE MOViE"
          width="70"
          loading="lazy"
        />
      </Col>
      <Col>
        <Flex gap={20}>
          <p>MM Festivals</p>
          <Link to="#">About MOViE MOViE</Link>
          <p>Mag + Events</p>
          <p>Membership</p>
          <p>繁</p>
        </Flex>
      </Col>
    </Row>
  );
};

export default Header;
