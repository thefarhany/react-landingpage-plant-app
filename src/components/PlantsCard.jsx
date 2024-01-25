import React from "react";
import { FaHeart } from "react-icons/fa";

const PlantsCard = ({ Img, Title, Desc }) => {
  return (
    <div className="w-[250px] drop-shadow-lg p-3 rounded-xl bg-white">
      <img className="w-full object-cover rounded-lg" src={Img} />
      <div className="mt-3 flex justify-between items-center">
        <h3 className="text-[17px] font-bold capitalize">{Title}</h3>
        <FaHeart size={20} color="#E44E4E" />
      </div>
      <p>{Desc}</p>
      <h3 className="text-xl font-semibold mt-2">$55</h3>
      <button className="w-full text-center text-[#16px] font-medium text-white bg-[#A4CBA4] py-1 mt-3 rounded-sm">
        Add to Cart
      </button>
    </div>
  );
};

export default PlantsCard;
