import React from "react";
import { FaUser, FaStar } from "react-icons/fa";

const TestimonialCards = ({ Person, Description }) => {
  return (
    <div className="w-[350px] bg-slate-50 p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <i className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-slate-100">
            <FaUser size={20} />
          </i>
          <h2 className="text-lg font-semibold">{Person}</h2>
        </div>
        <div className="flex gap-1">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
        </div>
      </div>
      <p className="leading-5 text-sm mt-5">{Description}</p>
    </div>
  );
};

export default TestimonialCards;
