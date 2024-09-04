import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";
import Movie from "../components/Movie";
import Ticketing from "../components/Ticketing";
import Dead from "../assets/dead.jpg";

const Detail = () => {
  return (
    <Row className="bg-earthy w-full h-full">
      <Col
        span={18}
        className="border-r-2 border-dashed border-black divide-y-2 divide-black"
      >
        <Flex vertical className="px-8 py-4">
          <Flex gap={20}>
            <ArrowLeftOutlined style={{ fontSize: 24 }} />
            <p className="text-[24px]">Back</p>
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
                    paths with the loudmouth Deadpool. They team up to defeat a
                    common enemy.
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
        <Flex className="text-[14px]">
          <Flex className="flex-1 px-8 py-6 border-r-2 border-black" gap={33}>
            <p className="font-GT-Pressure">MOVIE MOVIE CINEMA</p>
          </Flex>
          <Flex className="flex-1 px-8 py-6" justify="space-between">
            <Flex gap={33}>
              <p className="font-GT-Pressure">MOVIE MOVIE Pacific Place</p>
            </Flex>
            <ArrowDownOutlined style={{ fontSize: 24 }} />
          </Flex>
        </Flex>
        <Flex className="text-[14px] h-full">
          <Flex className="flex-1 px-8 py-6 border-r-2 border-black" gap={33}>
            <p className="font-GT-Pressure">06 Aug</p>
            <p className="font-GT-Pressure">MON</p>
          </Flex>
          <Flex className="flex-1 px-8 py-6" justify="space-between">
            <Flex>
              <p className="font-GT-Pressure"></p>
              <p className="font-GT-Pressure">House 3</p>
              <p className="font-GT-Pressure">$145</p>
              <p className="font-GT-Pressure">Share</p>
              <p className="font-GT-Pressure">BUY NOW</p>
            </Flex>
          </Flex>
        </Flex>
      </Col>
      <Ticketing />
    </Row>
  );
};

export default Detail;
