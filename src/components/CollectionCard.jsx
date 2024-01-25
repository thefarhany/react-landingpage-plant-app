import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const CollectionCard = ({ Img, Title, Subtitle }) => {
  return (
    <div className="w-[350px] flex flex-col items-center justify-center text-center bg-[#F4FFF4] p-3 rounded-lg">
      <img className="w-full object-cover rounded-md" src={Img} />
      <h2 className="text-lg font-bold leading-6 mt-2 text-[#333333]">
        {Title}
      </h2>
      <p className="mt-2 leading-5 text-[#5C5C5C]">{Subtitle}</p>
      <p className="mt-4 text-sm font-semibold cursor-pointer flex items-center">
        Learn More
        <FaChevronRight className="ml-2" />
      </p>
    </div>
  );
};

export default CollectionCard;
