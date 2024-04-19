import React from "react";
import { useState } from "react";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-8">
          <p className=" mb-14 pb-0 text-[30px] now font-[600]">
            New Launch 2024'
          </p>

          <p className="mb-20 pb-2 text-[28px] font-[600] font-montserrat text-orange-500">
            Our Summer Collections
          </p>

          <h1 className="mt-14 now text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-[900]">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-5">
              The New Arrival
            </span>
            <br />
            <span className="text-orange-600 inline-block mt-3">Nike</span>{" "}
            Shoes
          </h1>
          <p className="now text-{#0c0d0c} text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Unleash Style, Elevate Your Comfort To Sky.
            <p className="now text-lg sm:max-w-sm">
              Embrace Innovation with
              <p className="now ml-1 text-orange-600 inline-block text-bold text-lg sm:max-w-sm">
                Nike
              </p>
              <p className="now inline-block text-bold text-lg sm:max-w-sm">
                : Just Do It.
              </p>
            </p>
          </p>

          <div className="flex justify-starts items-start flex-wrap mt-20 gap-16 w-full">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-[40px] leading-[58px] line now font-[700]">
                  {stat.value}
                </p>
                <p className="leading-7 now text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <br />

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe colletion"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
