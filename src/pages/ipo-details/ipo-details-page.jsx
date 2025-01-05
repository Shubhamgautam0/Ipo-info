import React from "react";
import FeaturesList from "./feature-list";
import HighlightBox from "./highlight-box";
import { Header, HeroSection } from "../../component/ipo-details-component";
import NavigationMenu from "../../component/common-component/navbar";
import OffersList from "../../component/common-component/offfer-list";
import { useParams } from "react-router-dom";
import Footer from "../../component/common-component/footer";

const IPODetailsPage = () => {
  const {brokerType} = useParams(); 
  
  
  return (
    <div className="font-sans"> 
      <div>
        <NavigationMenu />
        <div className="mx-auto p-4 h-[320px]">
        <div className="flex justify-between items-center">
          <div> <h3>► Zerodha (₹20/Trade) <button className="bg-red-600 text-white text-base pl-2 pr-2 rounded-s"> Open Instant Account </button> </h3> </div>
          <div> <h3> ► Angel One (₹20/trade) <button className="bg-yellow-600 text-white text-base pl-2 pr-2 rounded-s"> Open Instant Account </button> </h3></div>
          <div> <h3>  ► Motilal Oswal (Free Intraday) <button className="bg-blue-600 text-white text-base pl-2 pr-2 rounded-s"> Open Instant Account </button> </h3></div>
        </div>
        </div>
        <div className="mx-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <Header />
              <HeroSection  brokerType = {brokerType} />
              {/* <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <FeaturesList />
                </div>
                <HighlightBox />
              </div> */}
            </div>

            {/* Ad Banner */}
            <div className="lg:col-span-1 mt-20">
              <OffersList />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IPODetailsPage;
