import React from "react";
import { IMAGE_URL } from "../../utils";

const HeroSection = ({ brokerType }) => {
  // console.log(IMAGE_URL.brokerType);

  return (
    <header className="bg-white py-8">
      <div className=" mx-auto p-4 ">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          {brokerType} Stock Trading, Demat, Brokerage and Reviews 2024
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={IMAGE_URL[brokerType]}
              alt={`${brokerType}`}
              className="w-41 h-27"
              style={
                { mixBlendMode:"multiply"}
              }
            />

          </div>


          {/* Description */}
          <p className="text-gray-700 mb-4">
            {brokerType} is India's leading stockbroker. It is among the largest and
            most reputed brokers offering online{" "}
            <span className="font-semibold">flat fee discount brokerage</span>{" "}
            services to invest in Equity, Currency, Commodity, IPO, Futures &
            Options, Bonds, Govt. Securities, and Direct Mutual Funds.
          </p>

        </div>
        <div>

          <p className="text-gray-700 ">
            {brokerType} charges <span className="font-bold">Rs 0 brokerage</span> for
            equity delivery trades and direct mutual funds. For intraday and
            Futures, it charges <span className="font-bold">flat Rs 20</span> or{" "}
            <span className="font-bold">0.03%</span> (whichever is lower) per
            trade. Further, for Options trades, it charges{" "}
            <span className="font-bold">Flat Rs 20</span> per executed order.
            That means with {brokerType}, the maximum brokerage you pay for any
            transaction is Rs 20 for an order (of any size, amount or segment).
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
