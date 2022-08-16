import React, { useEffect, useState } from "react";
import Car from "../../Car/Car";
import { bounceInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/carcollection")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // Animation
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceInUp, "bounceInUp"),
    },
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-4xl">Our Latest Cars</h2>
      <StyleRoot>
        <div
          style={styles.bounceInUp}
          className="cars-container grid gap-4 grid-cols-3 mx-4 my-6"
        >
          {cars.slice(0, 6).map((car) => (
            <Car key={car.id} car={car}></Car>
          ))}
        </div>
      </StyleRoot>
    </div>
  );
};

export default Cars;
