import React from "react";
import CategoriesItem from "./CategoriesItem";
import CatImg1 from "../assets/cat-1.png";
import CatImg2 from "../assets/cat-2.png";
import CatImg3 from "../assets/cat-3.png";
import CatImg4 from "../assets/cat-4.png";

const Categories = () => {
  return (
    <div className="container-xl mx-auto text-center flex flex-col px-10 py-20">
      <h1 className="text-3xl font-bold text-[#2F5C30]">Popular Categories</h1>
      <p className="mt-2 font-medium text-[#608362]">
        Explore our collections of plants and flowers
      </p>
      <div className="flex justify-center gap-8 mt-14">
        <CategoriesItem Img={CatImg1} Title={"Indoor Plants"} />
        <CategoriesItem Img={CatImg2} Title={"Flowering Plants"} />
        <CategoriesItem Img={CatImg3} Title={"Succulents"} />
        <CategoriesItem Img={CatImg4} Title={"Bouquets"} />
      </div>
    </div>
  );
};

export default Categories;
