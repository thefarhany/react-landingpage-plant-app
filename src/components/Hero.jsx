import React from "react";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="container-xl h-[100vh] mx-auto flex justify-center items-start mt-10 gap-10">
      <div className="w-[500px] mt-20">
        <h1 className="text-5xl text-[#2F5C30] font-extrabold">
          Discover Our Latest Plant Collections
        </h1>
        <p className="text-[#608362] text-[18px] mt-3">
          Welcome to our online store, where you can find a wide range of
          beautiful plants for your home or office. Browse through our
          collection and bring nature indoors.
        </p>
        <div className="mt-5">
          <button className="inline-block bg-[#59775A] text-white w-[100px] h-[30px] font-bold rounded-sm mr-4">
            Shop
          </button>
          <button className="inline-block border-[3px] border-[#59775A] text-[#59775A] outline-none w-[150px] h-[32px] font-bold rounded-sm">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img
          className="w-[500px] h-[500px] object-cover rounded-xl"
          src={HeroImg}
        />
      </div>
    </div>
  );
};

export default Hero;
