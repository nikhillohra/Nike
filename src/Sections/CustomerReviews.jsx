import React from "react";
import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <>
      <section className="max-container">
        <h3 className="now text-center text-4xl font-bold">
          What Our
          <span className="text-orange-600"> Customers </span>
          say?
        </h3>
        <p className="m-auto mt-4 max-w-lg text-center text-[16px] now text-slate-gray">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
