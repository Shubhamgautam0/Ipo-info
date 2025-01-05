import React from "react";

const HighlightBox = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-md shadow">
      <h3 className="text-lg font-bold text-red-600">
        Zerodha Account Opening Enquiry
      </h3>
      <p className="mt-2">
        Invest <strong>without brokerage fees</strong> in Equity Delivery and
        Direct Mutual Funds.
      </p>
      <p className="mt-2">
        Pay a flat Rs 20 per trade for Intra-day and F&O.{" "}
        <a href="#" className="text-blue-500 underline">
          Open an instant account
        </a>{" "}
        with Zerodha and start trading today.
      </p>
    </div>
  );
};

export default HighlightBox;
