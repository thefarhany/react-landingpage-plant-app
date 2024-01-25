import React from "react";
import CollectionCard from "./CollectionCard";
import ColImg1 from "../assets/col-1.png";
import ColImg2 from "../assets/col-2.png";
import ColImg3 from "../assets/col-3.png";

const Collection = () => {
  return (
    <div className="container-xl mx-auto bg-[#9ABA9A] px-10 py-20">
      <h1 className="text-3xl font-extrabold text-center text-[#2F5C30]">
        Discover Our Unique Collection of Rare Plants
      </h1>
      <div className="flex justify-center gap-8 mt-10">
        <CollectionCard
          Img={ColImg1}
          Title={"Enhance your garden with organic fertilizers"}
          Subtitle={
            "Our custom pot designs add a touch of elegance to your plants."
          }
        />
        <CollectionCard
          Img={ColImg2}
          Title={"Create a stunning indoor oasis with our plant collection"}
          Subtitle={
            "Our plants are carefully selected to thrive in indoor environments."
          }
        />
        <CollectionCard
          Img={ColImg3}
          Title={"Personalize your space with our custom-designed pots"}
          Subtitle={
            "Our pots are handcrafted and tailored to your aesthetic preferences."
          }
        />
      </div>
    </div>
  );
};

export default Collection;
