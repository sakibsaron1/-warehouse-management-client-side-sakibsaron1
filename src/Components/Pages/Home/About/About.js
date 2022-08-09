import React from "react";
import image from "../../../../images/about-car-img.png";

const About = () => {
  return (
    <div className="grid grid-cols-2 mt-20 mx-8 gap-6">
      <div className="about-text text-left">
        <h2 className="font-bold text-2xl mb-4">About US</h2>
        <div className="about-des">
          <p>
            Everything you need to build an amazing dealership website. Car
            Dealer is the most enticing, creative, modern and multipurpose auto
            dealer Premium WordPress Theme. Suitable for any car dealer
            websites, business or corporate websites. The Theme has been Created
            especially for automotive dealers, car resellers, car service
            stations, mechanic workshop and auto motor retailers.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
