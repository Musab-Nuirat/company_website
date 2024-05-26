import React from "react";
import Banner from "./Banner";
import BannerImage from "../assets/image1.svg";


const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">
        <Banner 
        banner={BannerImage}
        heading={"Develop your skills without diligence"}
        subheading={"A good example of a paragraph contains a topic setence, details and a conclusion. There are many different kinds of animals that live in China."}
        btn1={"Get Started"}
        btn2={"Discount"}
        />
    </div>
  );
};

export default Home;


/*
            
            

*/
