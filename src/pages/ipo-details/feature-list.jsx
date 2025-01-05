import React from "react";

const FeaturesList = () => {
  const features = [
    "The largest stockbroker by active clients, market volume, and new customer acquisition.",
    "One of the safest, most reliable & trustworthy brokers.",
    "Offers the most advanced online trading tools.",
    "Charges zero brokerage fees for Equity Delivery and Mutual Funds.",
    "The maximum brokerage charged is Rs 20 per trade.",
    "Offers up to 20x leverage on intraday trading.",
    "Offers Zero Commission Direct Mutual Funds.",
    "Suitable for all kinds of investors including active and passive investors, beginners, etc.",
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Zerodha Review 2024</h2>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
