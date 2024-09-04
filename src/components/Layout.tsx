import { useState } from "react";
import LeftBar from "../assets/leftBar.png";
import RightBar from "../assets/rightBar.png";
import Header from "./Header";
import { Col, ConfigProvider, Flex, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { Search } = Input;
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/detail");
    setShowSearch(false);
  };
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: "transparent",
          colorBorder: "transparent",
        },
        components: {
          Input: {
            activeShadow: "none",
            colorBorder: "transparent",
            hoverBorderColor: "transparent",
            activeBorderColor: "transparent",
          },
        },
      }}
    >
      <Flex className="fixed top-16 right-10 border-2 border-black p-4 rounded-full bg-white z-50">
        {showSearch ? (
          <Search
            placeholder="Movie name..."
            enterButton={null}
            onSearch={onSearch}
          />
        ) : (
          <SearchOutlined onClick={() => setShowSearch(true)} />
        )}
      </Flex>

      <Row className="fixed top-0 left-0 w-full h-full">
        <Col
          span={1}
          className="bg-earthy content-center border-r-2 border-black"
        >
          <img
            className="m-auto"
            src={LeftBar}
            alt="MOViE MOViE Cinemas"
            width="14"
            loading="lazy"
          />
        </Col>
        <Col span={22}>
          <Header />
          {children}
        </Col>
        <Col
          span={1}
          className="bg-purple content-center border-l-2 border-black"
        >
          <img
            className="m-auto"
            src={RightBar}
            alt="Movie Movie NowTV Ch116"
            width="14"
            loading="lazy"
          />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default Layout;
