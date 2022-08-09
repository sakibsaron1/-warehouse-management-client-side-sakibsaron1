import React from "react";
import image from "../../../../images/our-services-img.jpg";
const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-16 mx-8">
      <div className="service-area">
        <h2 className="font-bold text-2xl mb-4 text-left">Services</h2>
        <div className="service grid grid-cols-2 gap-6 mt-20">
          <div className="items">
            <h2 className="text-bold text-md font-bold">AFFORDABLE</h2>
            <p>
              Laudantium perspiciatis sed ut unde omnis iste natus error sit
              voluptatem acantium doloremque.
            </p>
          </div>
          <div className="items">
            <h2 className="text-bold text-md font-bold">OIL CHANGES</h2>
            <p>
              Voluptatem perspiciatis sed ut unde omnis iste natus error sit
              acantium doloremque laudantium.
            </p>
          </div>
          <div className="items">
            <h2 className="text-bold text-md font-bold">AIR CONDITIONING</h2>
            <p>
              Natus perspiciatis sed ut unde omnis iste error sit voluptatem
              acantium doloremque laudantium.
            </p>
          </div>
          <div className="items">
            <h2 className="text-bold text-md font-bold">TRANSMISSION</h2>
            <p>
              Omnis perspiciatis sed ut unde iste natus error sit voluptatem
              acantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className="service-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Services;
