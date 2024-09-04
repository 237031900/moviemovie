import { ArrowDownOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Tooltip } from "antd";
import Movie from "../components/Movie";
import Ticketing from "../components/Ticketing";

const CinemaList = () => {
  return (
    <Row className="bg-earthy w-full h-full">
      <Col
        span={18}
        className="border-r-2 border-dashed border-black divide-y-2 divide-black"
      >
        <Flex justify="space-between" className="px-8 py-4">
          <p className="text-[24px]">Special</p>
          <ArrowDownOutlined style={{ fontSize: 24 }} />
        </Flex>
        <Flex className="text-[14px]">
          <Flex className="flex-1 px-8 py-6 border-r-2 border-black" gap={33}>
            <p className="font-GT-Pressure">Filter</p>
            <p className="font-GT-Pressure">In Theater</p>
            <p className="font-GT-Pressure">Coming Soon</p>
            <p className="font-GT-Pressure">Special</p>
          </Flex>
          <Flex className="flex-1 px-8 py-6" justify="space-between">
            <Flex gap={33}>
              <p className="font-GT-Pressure">Cinema</p>
              <p className="font-GT-Pressure">All</p>
            </Flex>
            <ArrowDownOutlined style={{ fontSize: 24 }} />
          </Flex>
        </Flex>
        <Row gutter={20} className="p-4 !ml-auto !mr-auto">
          {Array.from(Array(3), () => {
            return (
              <Col span={8}>
                <Movie />
              </Col>
            );
          })}
        </Row>
      </Col>
      <Ticketing />
    </Row>
  );
};

export default CinemaList;
