import React, { useEffect, useState } from "react";
import Car from "../../Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://warehouse-management-s2rp.onrender.com/carcollection")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log("car collcec ", cars);
  return (
    <div className="my-10">
      <h2 className="font-bold text-4xl">Our Latest Cars</h2>

      <div className="cars-container grid gap-4 grid-cols-3 mx-4 my-6">
        {cars.slice(0, 6).map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Cars;
