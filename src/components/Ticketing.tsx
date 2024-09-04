import { Col, Flex, Tooltip } from "antd";
import Dead from "../assets/dead.jpg";
import { useState } from "react";
import { ReloadOutlined } from "@ant-design/icons";

const Ticketing = () => {
  const [reload, setReload] = useState(true);
  return (
    <Col span={6} className="bg-darkEarthy divide-y-2 divide-black">
      <Flex gap={20} align="center" className="px-8 py-4">
        <p className="text-[24px]">Ticketing Today</p>
        <Flex className="text-[14px]" gap={12}>
          <p className="text-center border-2 border-black rounded-full bg-black text-white w-7 h-7 font-GT-Pressure">
            PP
          </p>
          <p className="text-center border-2 border-gray-300 rounded-full text-gray-300 w-7 h-7 font-GT-Pressure">
            CP
          </p>
          <Tooltip title="PP=Pacific Place; CP=CityPlaza">
            <span>?</span>
          </Tooltip>
        </Flex>
      </Flex>
      {reload ? (
        <Flex
          vertical
          gap={16}
          className="h-full"
          justify="center"
          align="center"
        >
          <p className="font-GT-Pressure">No Ticketing for Today Yet</p>
          <a className="text-center" onClick={() => setReload(false)}>
            <ReloadOutlined />
            <p className="font-GT-Pressure">Reload</p>
          </a>
        </Flex>
      ) : (
        <Flex className="p-4" vertical gap={16}>
          <Flex vertical className="border-2 border-black w-full">
            <div className="bg-black text-center h-[142px]">
              <img className="m-auto h-full" src={Dead} loading="lazy" />
            </div>
            <p className="font-GT-Pressure p-2 border-b-2 border-black w-full">
              Deadpool & Wolverine
            </p>
            <Flex className="font-GT-Pressure divide-x-2 divide-black">
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical className="border-2 border-black w-full">
            <div className="bg-black text-center h-[142px]">
              <img className="m-auto h-full" src={Dead} loading="lazy" />
            </div>
            <p className="font-GT-Pressure p-2 border-b-2 border-black w-full">
              Deadpool & Wolverine
            </p>
            <Flex className="font-GT-Pressure divide-x-2 divide-black">
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
              <Flex
                gap={4}
                justify="center"
                align="center"
                className="p-2 flex-1"
              >
                <span className="bg-[#F1891A] w-[10px] h-[10px] rounded-full border-2 border-black"></span>
                <span>10:45</span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Col>
  );
};

export default Ticketing;
