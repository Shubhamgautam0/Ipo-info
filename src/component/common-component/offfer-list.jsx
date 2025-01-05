import React from "react";
import { OFFERS } from "../../utils";

const OffersList = () => {
  return (
    <div className="container mx-auto px-4 py-3 grid grid-cols-1 gap-6">
      <div className="flex items-center justify-center text-white px-3 rounded-md text-center w-full">
        <img
          src="https://www.chittorgarh.net/images/special_offers.png"
          alt=""
        />
      </div>
      <h3 className="text-lg font-medium">By Popular Stock Brokers</h3>
      {OFFERS.map((offer, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-md ${offer.bgColor} flex flex-col items-center text-center`}
        >
           <div className="flex items-center space-x-3 mb-2">
            <img
              src={offer.logo}
              alt="logo" 
              className="w-8 h-8 rounded"
            />            
            <h1 className="font-medium">{offer.broker}</h1>  
          </div>
          {/* <h3 className="text-lg font-bold text-gray-700">{offer.broker}</h3> */}
          <p className="text-sm text-gray-600">{offer.description}</p>
          <p className="text-sm text-gray-600 whitespace-pre-line mt-2">
            {offer.details}
          </p>
          <button
            className={`mt-4 px-4 py-2 text-white rounded ${offer.buttonColor} hover:opacity-90`}
          >
            {offer.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
