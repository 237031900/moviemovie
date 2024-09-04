import { Flex, Modal } from "antd";
import Rear from "../assets/rear.jpg";
import Dead from "../assets/dead.jpg";
import Popup from "../assets/popup.gif";
import { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <Modal
        width={"auto"}
        centered
        closeIcon={<CloseCircleOutlined style={{fontSize: 25, color: 'black'}}/>}
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <img className="m-8" src={Popup} width="300" loading="lazy" />
      </Modal>
      <Flex className="border-b-2 border-black divide-x-2 divide-black">
        <Flex vertical className="divide-y-2 divide-black flex-1 bg-earthy">
          <div className="h-20 px-6 py-2 font-GT-Pressure text-[45px]">
            Deadpool & Wolverine
          </div>
          <div className="h-14 w-full"></div>
          <div className="h-14 w-full"></div>
          <Flex vertical align="center" className="p-4 gap-4">
            <img
              className="ease-in-out duration-300 scale-[2.2] hover:scale-[1]"
              src={Dead}
              width="220"
              loading="lazy"
            />
            <p className="font-GT-Pressure text-[36px]">
              Wolverine is recovering from his injuries when he crosses paths
              with the loudmouth Deadpool. They team up to defeat a common
              enemy.
            </p>
          </Flex>
        </Flex>
        <Flex vertical className="divide-y-2 divide-black flex-1 bg-purple">
          <div className="h-20 px-6 py-2 font-GT-Pressure text-[45px]">
            Rear Window
          </div>
          <div className="h-14 w-full"></div>
          <div className="h-14 w-full"></div>
          <Flex vertical align="center" className="p-4 gap-4">
            <img
              className="ease-in-out duration-300 scale-[2.1] hover:scale-[1]"
              src={Rear}
              width="220"
              loading="lazy"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
