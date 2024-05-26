import React from "react";
import aboutImg1 from "../assets/image1.svg";
import aboutImg2 from "../assets/image2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-6" id="about">
      {/* 1st part */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-1/2">
          <img src={aboutImg1} alt="" />
        </div>
        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-8 leading-normal">
            We have been imporoving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      {/* 2nd part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="w-1/2">
          <img src={aboutImg2} alt="" />
        </div>
        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-8 leading-normal">
            You can Practice at any{" "}
            <span className="text-secondary"> time convient for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
