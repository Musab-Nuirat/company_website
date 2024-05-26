import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      greenNumber: 2,
      green: "/src/assets/green.png",
      red: "/src/assets/red.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias",
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 299,
      greenNumber: 4,
      green: "/src/assets/green.png",
      red: "/src/assets/red.png",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias",
    },
    {
      name: "Business",
      monthlyPrice: 69,
      yearlyPrice: 599,
      greenNumber: 5,
      green: "/src/assets/green.png",
      red: "/src/assets/red.png",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias",
    },
  ];

  // Helper function to decrement greenNumber
  const decrementGreenNumber = (pkg) => {
    pkg.greenNumber -= 1;
  };

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Pricing
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          molestias id reprehenderit eius qui nemo atque tempore esse alias
          sunt!
        </p>

        {/* toggle pricing */}
        <div className="mt-16 mb-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer "
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out 
                ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            {/* Card Title */}
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>

            {/* Card Description */}
            <p className="text-tartiary text-center my-5">{pkg.description}</p>

            {/* Card Pricing */}
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              ${isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>

            {/* Features Inclued */}
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                {pkg.greenNumber > 0 ? (
                  <img src={pkg.green} alt="" className="w-5 h-5" />
                ) : (
                  <img src={pkg.red} alt="" className="w-5 h-5" />
                )}
                {decrementGreenNumber(pkg)}
                Videos of Lesson
              </li>
              <li className="flex gap-3 items-center">
                {pkg.greenNumber > 0 ? (
                  <img src={pkg.green} alt="" className="w-5 h-5" />
                ) : (
                  <img src={pkg.red} alt="" className="w-5 h-5" />
                )}
                {decrementGreenNumber(pkg)}
                Homework check
              </li>
              <li className="flex gap-3 items-center">
                {pkg.greenNumber > 0 ? (
                  <img src={pkg.green} alt="" className="w-5 h-5" />
                ) : (
                  <img src={pkg.red} alt="" className="w-5 h-5" />
                )}
                {decrementGreenNumber(pkg)}
                Additional practical task
              </li>
              <li className="flex gap-3 items-center">
                {pkg.greenNumber > 0 ? (
                  <img src={pkg.green} alt="" className="w-5 h-5" />
                ) : (
                  <img src={pkg.red} alt="" className="w-5 h-5" />
                )}
                {decrementGreenNumber(pkg)}
                Monthly conferences
              </li>
              <li className="flex gap-3 items-center">
                {pkg.greenNumber > 0 ? (
                  <img src={pkg.green} alt="" className="w-5 h-5" />
                ) : (
                  <img src={pkg.red} alt="" className="w-5 h-5" />
                )}
                {decrementGreenNumber(pkg)}
                Personal advice from teachers
              </li>
            </ul>

            {/* Get Started Button */}
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
