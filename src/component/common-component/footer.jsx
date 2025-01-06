import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <div className="grid grid-cols-4 gap-8 max-w-7xl ml-4 mr-0 py-8">
        
        <div className="text-center border bg-slate-100 hover:bg-slate-200 rounded-lg ">
          <h2 className="font-semibold text-lg">CONTACT US</h2>
        </div>

        
        <div className="text-center border bg-slate-100 hover:bg-slate-200 rounded-lg">
          <h2 className="font-semibold text-lg">SITEMAP</h2>
        </div>

       
        <div className="text-center border bg-slate-100 hover:bg-slate-200 rounded-lg">
          <h2 className="font-semibold text-lg">ADVERTISE WITH US</h2>
        </div>

       
        <div className="text-center border bg-slate-100 hover:bg-slate-200 rounded-lg">
          <h2 className="font-semibold text-lg">ABOUT US</h2>
        </div>
      </div>

      
      <div className="grid grid-cols-4 gap-10  max-w-7xl ml-3 mr-0 pb-8">
        <div>
          <h3 className="font-bold text-lg mb-4 lg:ml-4">Best Discount Broker in India</h3>
          <ul className="space-y-2  mx-auto text-center">
            <li>
              <span className="font-medium">Zerodha</span> (₹20 per Trade)
            </li>
            <li>
              <span className="font-medium">Upstox</span> (₹20 per Trade)
            </li>
            <li>
              <span className="font-medium">Angel One</span> (₹20 per Trade)
            </li>
            <li>
              <span className="font-medium">5Paisa</span> (₹20 per Trade)
            </li>
            <li>
              <span className="font-medium bg-yellow-100 px-1">ProStocks</span> (₹899 Unlimited)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 lg:ml-2">Best Full-Service Brokers in India</h3>
          <ul className="space-y-2 lg:ml-4 mx-auto text-center">
            <li>
              <span className="font-medium bg-yellow-100 px-1">Angel One</span>
            </li>
            <li>Kotak Securities</li>
            <li>Motilal Oswal</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 lg:ml-2">Unlimited Monthly Trading Plans</h3>
          <ul className="space-y-2 lg:ml-4 mx-auto text-center">
            <li>
              <span className="font-medium bg-yellow-100 px-1">Prostocks</span> (₹899 Unlimited)
            </li>
            <li>SAS Online (₹999 Unlimited)</li>
            <li>Tradeplus</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 lg:ml-2">Compare Share Broker in India</h3>
          <ul className="space-y-2 lg:ml-4 mx-auto text-center">
            <li>
              <span className="font-medium bg-yellow-100 px-1">Zerodha Vs Upstox</span>
            </li>
            <li>Nuvama Vs Zerodha</li>
            <li>ICICI Direct Vs HDFC Sec</li>
            <li>Zerodha Vs 5Paisa</li>
            <li>Zerodha Vs ProStocks</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-8 bg-gray-100">
        <h3 className="font-bold text-lg mb-4">Download Mobile App</h3>
        <div className="flex justify-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play Store"
            className="h-12"
          />
          <img
            src="https://www.chittorgarh.net/images/app-store.png"
            alt="Apple App Store"
            className="h-12"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4">Disclaimer and Privacy Statement</p>
        <p className="text-sm text-gray-500 mt-2">© 2025 Chittorgarh Infotech Pvt Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
