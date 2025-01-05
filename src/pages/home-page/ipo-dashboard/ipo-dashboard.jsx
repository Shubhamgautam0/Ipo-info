import React from "react";
import { useNavigate } from "react-router-dom";
import { BROKERREVIEW, IPOINFO, MARKETINFO } from "../../../utils";

function IPODashboard() {
  const navigate = useNavigate();

  const handleBrokerClick = (brokername, brokerId) => {
    const generateBrokerName = brokername.replace(/\s/g, "").toLowerCase();
    navigate(`./stockbroker/${generateBrokerName}/${brokerId}`);
  };

  return (
    <>
     <div className="mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">
        IPO, RI, BB, NCD, Broker Info
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3 grid md:grid-cols-3 gap-6 h-[300px]">
          {/* Broker Reviews Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">
              Top Share Broker Reviews
            </h2>
            <div className="flex space-y-3">
              <div>
                {BROKERREVIEW.map((broker, index) => (
                  <div key={index} className="flex">
                    <div className="flex">
                      <span className="text-yellow-400 mr-2">⚡</span>
                      <span
                        className={
                          broker.highlight
                            ? "text-red-600 font-medium bg-red-100"
                            : ""
                        }
                        onClick={() =>
                          handleBrokerClick(broker.name, index + 10)
                        }
                      >
                        {broker.name}
                        <span
                          className={`text-sm ${broker.highlight
                            ? "text-red-600 font-medium"
                            : "text-gray-600"
                            } ml-2`}
                        > 
                          {broker.price}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-2">
                <img
                  src="https://www.chittorgarh.net/images/online-trading-home.png"
                  alt=""
                  width={200}
                />
              </div>
            </div>
          </div>

          {/* IPO Information Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">
              Initial Public Offer (IPO)
            </h2>
            <div className="flex space-y-3">
              <div>
                {IPOINFO.map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-yellow-400 mr-2">⚡</span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="ml-12">
                <img
                  src="https://www.chittorgarh.net/images/ipo.png"
                  alt=""
                  width={100}
                />
              </div>
            </div>
          </div>

          {/* Market Information Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">
              Share Market Information
            </h2>
            <div className="flex space-y-3">
              <div>
                {MARKETINFO.map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-yellow-400 mr-2">⚡</span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="">
                <img
                  src="https://www.chittorgarh.net/images/stock-market.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>

  );
}

export default IPODashboard;
