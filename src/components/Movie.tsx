import { Flex } from "antd";
import Dead from "../assets/dead.jpg";

const Movie = () => {
  return (
    <Flex vertical className="text-[18px] border-2 border-black" align="center">
      <img className="" src={Dead} width="100%" loading="lazy" />
      <p className="font-GT-Pressure py-2 border-b-2 border-black w-full text-center">
        Deadpool & Wolverine
      </p>
      <p className="font-GT-Pressure py-2 bg-[#A6936F] w-full text-center">
        BUY NOW
      </p>
    </Flex>
  );
};

export default Movie;
