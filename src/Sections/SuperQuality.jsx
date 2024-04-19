import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="now capitalize text-4xl lg:max-w-lg font-bold">
          Feel the
          <span className="text-orange-600"> Excellence </span>
          <span className="text-black"> of Our </span>
          <span className="text-orange-600">Premium-Quality</span> Shoes.
        </h2>
        <p className="mt-4 now lg:max-w-lg info-text">
          Delivering unparalleled comfort and style, our carefully crafted
          footwear is meticulously designed to enhance your journey, offering
          unrivaled quality, innovation, and a dash of sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg now info-text">
          Commitment to precision and excellence guarantees your contentment.
        </p>
        <div className="mt-11">
          <Button label="View details" iconURL={arrowRight} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
