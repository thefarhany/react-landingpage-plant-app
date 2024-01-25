import React from "react";
import PlantsCard from "./PlantsCard";
import PlangImg1 from "../assets/plant-1.png";
import PlangImg2 from "../assets/plant-2.png";
import PlangImg3 from "../assets/plant-3.png";
import PlangImg4 from "../assets/plant-4.png";
import PlangImg5 from "../assets/plant-5.png";
import PlangImg6 from "../assets/plant-6.png";
import PlangImg7 from "../assets/plant-7.png";
import PlangImg8 from "../assets/plant-8.png";

const Plants = () => {
  return (
    <div className="container-xl mx-auto flex flex-col items-center p-10">
      <h1 className="text-3xl w-2/4 text-center font-bold text-[#2F5C30]">
        Being on the magazine cover was a dream come true for the model
      </h1>
      <p className="w-2/5 text-center mt-2 text-[#608362] font-medium">
        Explore our wide selection of high-quality plants, ranging from vibrant
        flowers to lush greenery and everything in between.
      </p>
      <div className="flex gap-5 mt-10">
        <PlantsCard
          Img={PlangImg1}
          Title={"Monstera Deliciosa"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg2}
          Title={"Ficus lyrata"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg3}
          Title={"Snake Plant"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg4}
          Title={"Zamioculcas Zamiifolia"}
          Desc={"Considerably sizable"}
        />
      </div>
      <div className="flex gap-5 mt-4">
        <PlantsCard
          Img={PlangImg5}
          Title={"Photos"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg6}
          Title={"Rubber Plant"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg7}
          Title={"Peace Lily"}
          Desc={"Considerably sizable"}
        />
        <PlantsCard
          Img={PlangImg8}
          Title={"Spider Plant"}
          Desc={"Considerably sizable"}
        />
      </div>
    </div>
  );
};

export default Plants;
