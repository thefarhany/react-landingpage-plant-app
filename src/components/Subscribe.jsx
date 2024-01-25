import React from "react";
``;

const Subscribe = () => {
  return (
    <div className="container-xl mx-auto bg-[#9ABA9A] mt-10 px-9 py-20 flex justify-center items-center gap-20">
      <div>
        <h2 className="text-3xl font-bold text-[#2F5C30]">
          Discover Our Plant Collection
        </h2>
        <p className="font-medium text-[#608362] mt-3">
          Explore a wide variety of beautiful plants for your home.
        </p>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="w-[400px] h-[30px] text-[16px] p-2 rounded-sm outline-none"
          placeholder="Email"
        />
        <button className="bg-white h-[30px] px-3 text-sm font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
