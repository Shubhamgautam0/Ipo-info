import React from "react";
import IpoList from "./ipo-list";
import IpoDashboard from "./ipo-dashboard";
import NavigationMenu from "../../component/common-component/navbar";
import OffersList from "../../component/common-component/offfer-list";
import Footer from "../../component/common-component/footer";

function Homepage() {
  return (
    <div>
      <NavigationMenu />
      {/* Banner main section */}
      <div className="mx-auto p-4 h-[320px]">
        <div className="flex justify-between items-center">
          <div> <h3>► Zerodha (₹20/Trade) <button className="bg-red-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3> </div>
          <div> <h3> ► Angel One (₹20/trade) <button className="bg-yellow-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3></div>
          <div> <h3>  ► Motilal Oswal (Free Intraday) <button className="bg-blue-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3></div>
        </div> 
      </div>
      {/* Main Content and Ad Section */}
      <div className="mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Main Content */}
          <div className="col-span-3">
            <IpoDashboard />
            <IpoList />
          </div>

          {/* Ad Banner */}
          <div className="lg:col-span-1 mt-20">
            <OffersList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
