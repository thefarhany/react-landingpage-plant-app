import React from "react";

const CategoriesItem = ({ Img, Title }) => {
  return (
    <div className="w-[200px] flex flex-col items-center">
      <img
        src={Img}
        className="w-[80px] h-[80px] bg-slate-200 p-3 rounded-full object-cover"
      />
      <h3 className="text-[16px] mt-4 font-medium text-[#5C5C5C]">{Title}</h3>
    </div>
  );
};

export default CategoriesItem;
