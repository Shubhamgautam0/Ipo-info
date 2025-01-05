import React from "react";
import { ADBANNERS } from "../../utils";

function Adbanner() {
  return (
    <>
      <div className="flex items-center justify-center text-white py-1 px-3 rounded-md text-center w-full">
        <img
          src="https://www.chittorgarh.net/images/special_offers.png"
          alt=""
        />
      </div>
      <h3 className="text-lg font-medium">By Popular Stock Brokers</h3>

      {/* Ad Banners */}
      {ADBANNERS.map((banner, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src={banner.logo}
              alt={`${banner.broker} logo`}
              className="w-8 h-8 rounded"
            />            
            <h1 className="font-medium">{banner.broker}</h1>  
          </div>
          <div className="text-sm mb-3"> 
            <div className="font-medium">{banner.title}</div> 
            {banner.price && (
              <div className="text-gray-600">{banner.price}</div> 
            )}
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700">
            {banner.buttonText}
          </button> 
        </div>
      ))}
    </>
  );
}

export default Adbanner;
