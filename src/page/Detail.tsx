import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CopyOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, Flex, MenuProps, message, Row } from "antd";
import Ticketing from "../components/Ticketing";
import Dead from "../assets/dead.jpg";
import { Link } from "react-router-dom";

const Detail = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Link Copied!",
    });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Flex gap={8}>
          <CalendarOutlined />
          <p>Calendar(ics)</p>
        </Flex>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Flex gap={8}>
          <CopyOutlined />
          <a onClick={success}>Copy Link</a>
        </Flex>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Flex gap={8}>
          <FacebookOutlined />
          <p>Facebook</p>
        </Flex>
      ),
      key: "3",
    },
  ];
  return (
    <>
      {contextHolder}
      <Row className="bg-earthy w-full h-full">
        <Col
          span={18}
          className="border-r-2 border-dashed border-black divide-y-2 divide-black"
        >
          <Flex vertical className="px-8 py-4">
            <Flex gap={20}>
              <ArrowLeftOutlined style={{ fontSize: 24 }} />
              <Link to="/cinema" className="text-[24px]">
                Back
              </Link>
            </Flex>
            <Flex align="stretch" gap={20}>
              <img className="m-auto h-full" src={Dead} loading="lazy" />
              <Flex vertical className="text-[30px]" gap={31}>
                <Flex vertical gap={8}>
                  <p className="font-GT-Pressure">Deadpool & Wolverine</p>
                  <p className="font-GT-Pressure">DIR Shawn Levy</p>
                </Flex>
                <Flex gap={180} justify="space-around">
                  <Flex vertical className="text-[14px]" gap={18}>
                    <Flex gap={48}>
                      <p className="font-GT-Pressure w-16">Released</p>
                      <p className="font-GT-Pressure">2024.07.24</p>
                    </Flex>
                    <Flex gap={48}>
                      <p className="font-GT-Pressure w-16">Class</p>
                      <p className="font-GT-Pressure">III</p>
                    </Flex>
                    <Flex gap={48}>
                      <p className="font-GT-Pressure w-16">Duration</p>
                      <p className="font-GT-Pressure">128 minutes</p>
                    </Flex>
                    <Flex gap={48}>
                      <p className="font-GT-Pressure w-16">Language</p>
                      <p className="font-GT-Pressure">English</p>
                    </Flex>
                  </Flex>
                  <Flex vertical gap={18} className="flex-1">
                    <p className="font-GT-Pressure text-[14px]">
                      Wolverine is recovering from his injuries when he crosses
                      paths with the loudmouth Deadpool. They team up to defeat
                      a common enemy.
                    </p>
                    <Flex gap={20}>
                      <p className="font-GT-Pressure text-[14px]">Read More </p>
                      <ArrowRightOutlined style={{ fontSize: 14 }} />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="text-[14px] bg-[#A6936F] divide-x-2 divide-black">
            <Flex className="flex-1 px-8 py-6">
              <p className="font-GT-Pressure text-[18px]">MOVIE MOVIE CINEMA</p>
            </Flex>
            <Flex className="flex-1 px-8 py-6" justify="space-between">
              <p className="font-GT-Pressure text-[18px]">
                MOVIE MOVIE Pacific Place
              </p>
              <ArrowDownOutlined style={{ fontSize: 24 }} />
            </Flex>
          </Flex>
          <Flex className="text-[14px] divide-x-2 divide-black">
            <Flex
              className="w-[50%] py-4 px-8  border-b-2 border-black"
              gap={8}
            >
              <p className="font-GT-Pressure text-[36px]">06 Aug</p>
              <p className="font-GT-Pressure text-[18px]">MON</p>
            </Flex>
            <Flex
              className="w-[50%] divide-y-2 divide-black  border-b-2 border-black"
              vertical
            >
              <Flex className="divide-x-2 divide-black">
                <Flex
                  className="font-GT-Pressure flex-1 p-4 text-nowrap"
                  gap={4}
                  justify="center"
                  align="center"
                >
                  <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                  <span>10:45</span>
                </Flex>
                <p className="font-GT-Pressure flex-1 p-4 text-nowrap">
                  House 3
                </p>
                <p className="font-GT-Pressure flex-1 p-4 text-nowrap">$145</p>
                <Dropdown menu={{ items }}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="font-GT-Pressure flex-1 p-4 text-nowrap"
                  >
                    Share
                  </a>
                </Dropdown>

                <p className="font-GT-Pressure flex-1 p-4 text-nowrap bg-[#A6936F]">
                  BUY NOW
                </p>
              </Flex>
              <Flex className="divide-x-2 divide-black">
                <Flex
                  className="font-GT-Pressure flex-1 p-4 text-nowrap"
                  gap={4}
                  justify="center"
                  align="center"
                >
                  <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                  <span>10:45</span>
                </Flex>
                <p className="font-GT-Pressure flex-1 p-4 text-nowrap">
                  House 3
                </p>
                <p className="font-GT-Pressure flex-1 p-4 text-nowrap">$145</p>
                <a className="font-GT-Pressure flex-1 p-4 text-nowrap">Share</a>
                <p className="font-GT-Pressure flex-1 p-4 text-nowrap bg-[#A6936F]">
                  BUY NOW
                </p>
              </Flex>
            </Flex>
          </Flex>
        </Col>
        <Ticketing />
      </Row>
    </>
  );
};

export default Detail;
