import React from "react";
import Banner from "./Banner";
import BannerImage from "../assets/image3.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <Banner
          banner={BannerImage}
          heading={"Each student an share their discount code for friends"}
          subheading={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolorum molestiae ipsam amet deleniti accusantium hic culpa adipisci placeat eligendi?"
          }
          btn1={"I have a code"}
        //   ????
        />
      </div>
    </div>
  );
};

export default Newsletter;
