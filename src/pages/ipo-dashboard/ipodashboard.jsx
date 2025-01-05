import React, { useState } from "react";
import NavigationMenu from "../../component/common-component/navbar";
import Footer from "../../component/common-component/footer";
import OffersList from "../../component/common-component/offfer-list";
import { IPODASHBOARDPAGE } from "../../utils";

const IPODashboard = () => {
  const [activeTab, setActiveTab] = useState("Main Board IPOs");

  return (
    <div>
      <NavigationMenu />
      <div className="mx-auto p-4 h-[320px]">
        <div className="flex justify-between items-center">
          <div> <h3>► Zerodha (₹20/Trade) <button className="bg-red-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3> </div>
          <div> <h3> ► Angel One (₹20/trade) <button className="bg-yellow-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3></div>
          <div> <h3>  ► Motilal Oswal (Free Intraday) <button className="bg-blue-600 text-white text-xs rounded-s"> Open Instant Account </button> </h3></div>
        </div>
      </div>
      <div className="flex ">
        <div>
          <div className="max-w-6xl mx-4 p-6 bg-white rounded-md">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-4">IPO Dashboard India</h1>

            {/* Tabs */}
            <div className="flex border bg-gray-400 text-white mb-4 rounded-lg">
              <button
                className={`px-4 py-2 ${activeTab === "Main Board IPOs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-black"
                  } font-medium rounded-t-md`}
                onClick={() => setActiveTab("Main Board IPOs")}
              >
                Main Board IPOs
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "SME IPOs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-400 text-black"
                  } font-medium rounded-t-md`}
                onClick={() => setActiveTab("SME IPOs")}
              >
                SME IPOs
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              The IPO dashboard provides the latest info about Current IPO and
              Upcoming IPO's at BSE and NSE. Initial Public Offer (IPO) is a privately
              held company's first sale of stock to the public via a stock exchange.
              Companies use IPO funds for working capital, debt repayment,
              acquisitions, and for many other uses. The mainboard IPO's are listed on
              stock exchanges like NSE and BSE.
            </p>

            {/* Stats Section */}
            <div className="border grid grid-cols-1 sm:grid-cols-5 gap-4">
              <div className="p-4  rounded-md text-center">
                <p className="text-blue-600 text-3xl font-bold">2</p>
                <p className="text-gray-700 font-medium">
                  Total Main Board IPOs in the year 2025 (NSE + BSE)
                </p>
              </div>
              <div className="p-4  rounded-md text-center">
                <p className="text-green-600 text-3xl font-bold">0</p>
                <p className="text-gray-700 font-medium">IPOs Listed in Gain</p>
              </div>
              <div className="p-4  rounded-md text-center">
                <p className="text-red-600 text-3xl font-bold">0</p>
                <p className="text-gray-700 font-medium">IPOs Listed in Loss</p>
              </div>
              <div className="p-4  rounded-md text-center">
                <p className="text-green-600 text-3xl font-bold">0</p>
                <p className="text-gray-700 font-medium">
                  IPOs Listed in Gain (End of Day)
                </p>
              </div>
              <div className="p-4 rounded-md text-center">
                <p className="text-red-600 text-3xl font-bold">0</p>
                <p className="text-gray-700 font-medium">
                  IPOs Listed in Loss (End of Day)
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="mb-6 ml-4">
              <h2 className="text-xl font-semibold ml-5 mb-2">IPO dashboard</h2>
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2"> Company Name</th>
                    <th className="border border-gray-300 p-2">Open</th>
                    <th className="border border-gray-300 p-2">Close</th>
                    <th className="border border-gray-300 p-2">status</th>

                  </tr>
                </thead>
                <tbody>
                  {IPODASHBOARDPAGE.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="border border-gray-300 p-2">{item.companyName}</td>
                      <td className="border border-gray-300 p-2">{item.openDate}</td>
                      <td className="border border-gray-300 p-2">{item.closeDate}</td>
                      <td className="border border-gray-300 p-2">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-6 ml-4">
              <h2 className="text-xl font-semibold ml-5 mb-2">IPO dashboard</h2>
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2"> Company Name</th>
                    <th className="border border-gray-300 p-2">Open</th>
                    <th className="border border-gray-300 p-2">Close</th>
                    <th className="border border-gray-300 p-2">status</th>

                  </tr>
                </thead>
                <tbody>
                  {IPODASHBOARDPAGE.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="border border-gray-300 p-2">{item.companyName}</td>
                      <td className="border border-gray-300 p-2">{item.openDate}</td>
                      <td className="border border-gray-300 p-2">{item.closeDate}</td>
                      <td className="border border-gray-300 p-2">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <OffersList />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default IPODashboard;
