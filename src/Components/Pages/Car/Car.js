import React from "react";

const Car = ({ car }) => {
  const { id, name, price, qty, suppliername, description, img } = car;

  return (
    <div className="single-car border-solid border-2 border-[#14B8A6] rounded">
      <img src={img} alt="" className="w-full h-64" />
      <div className="car-info text-left p-4">
        <h2 className="font-bold">Name : {name}</h2>
        <h2 className="font-bold">Price : {price}</h2>
        <h2 className="font-bold">Quantity : {qty}</h2>
        <h2 className="font-bold">Supplier Name : {suppliername}</h2>
        <p>{description.slice(0, 80)}....</p>
        <button class="w-full mt-3 bg-transparent hover:bg-[#14B8A6] text-[#14B8A9] font-semibold hover:text-white py-2 px-4 border border-[#14B8A6] hover:border-transparent rounded">
          Update
        </button>
      </div>
    </div>
  );
};

export default Car;
