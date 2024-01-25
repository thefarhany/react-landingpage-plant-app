import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <div className="container-xl mx-auto flex flex-col items-center px-10 py-20">
      <h1 className="text-3xl font-bold text-[#2F5C30]">
        What Our Customers Say
      </h1>
      <p className="font-medium text-[#608362]">
        Read what others have to say about their Plant Paradise experience
      </p>
      <div className="flex gap-6 mt-8">
        <TestimonialCards
          Person={"Emma"}
          Description={
            "I absolutely love the plants I ordered! They arrived in perfect condition and have brightened up my home."
          }
        />
        <TestimonialCards
          Person={"James"}
          Description={
            "Plant Paradise has a great selection of plants at competitive prices. I highly recommend them."
          }
        />
        <TestimonialCards
          Person={"Sophie"}
          Description={
            "I've purchased multiple plants from Plant Paradise and have been impressed with the quality and customer service every time"
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
