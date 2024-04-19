import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-[65px] now font-bold">
          <span className="text-orange-600"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 now text-{#0c0d0c} ">
          Immerse Yourself in Unmatched Quality and Style with Nike's Coveted
          Collection. Explore a Universe of Comfort, Innovation, and Value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
