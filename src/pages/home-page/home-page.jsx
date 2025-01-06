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
          <div> <h3>► Zerodha (₹20/Trade) <button className="bg-red-600 text-white text-base pl-2 pr-2 rounded-s" > <a href="https://zerodha.com/?c=AUTCIP">Open Instant Account</a></button> </h3> </div>
          <div> <h3> ► Angel One (₹20/trade) <button className="bg-yellow-600 text-white text-base pl-2 pr-2 rounded-s"> <a href="https://www.angelone.in/register/?rne_source=DRA&referrer=IIROA::rne_source=DRA::btype=&source_caller=api&pid=NXT&sbtag=SUlST0E=&is_retargeting=true&shortlink=1u3kuvwl&deep_link_value=referrer%3DIIROA%3A%3Arne_source%3DDRA%3A%3Abtype%3D&c=nxt_campaign#/login"> Open Instant Account</a> </button> </h3></div>
          <div> <h3>  ► Motilal Oswal (Free Intraday) <button className="bg-blue-600 text-white text-base pl-2 pr-2 rounded-s"><a href="https://prd.motilaloswal.com/PRAN/ProPartner/ReferralLink/UID/PLapYo7g13VZUtROPt0s3Q==">Open Instant Account</a>  </button> </h3></div>
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
