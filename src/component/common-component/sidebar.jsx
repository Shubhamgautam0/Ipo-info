import React, { useState } from "react";
import { BROKERDATA, SIDEBARITEMS } from "../../utils"; 

const SidebarMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);

  return (
    <div className="bg-gray-600 text-white">
      {/* Main Navigation */}
      <nav className="container mx-auto">
        <div className="flex items-center h-16">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded mr-2"
          >   
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >   
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />   
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex mt-[136px]">  
          {/* Backdrop */}
          <div
            className="fixed inset-0"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar Content */}
          <div className="relative w-64 max-w-xs bg-white text-gray-900 overflow-y-auto">
            <div className="h-full">
              {SIDEBARITEMS.map((item, index) => (
                <div
                  key={index}
                  className={`border-b ${
                    item.isHighlighted ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveSidebarItem(
                        activeSidebarItem === index ? null : index
                      )
                    }
                    className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium">{item.title}</span>
                    {!item.isBrokerList && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeSidebarItem === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {activeSidebarItem === index &&
                    !item.isBrokerList &&
                    item.items && (
                      <div className="bg-gray-50 py-2">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-8 py-2 text-sm hover:bg-gray-100"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )} 

                  {/* Broker List */}
                  {item.isBrokerList && (
                    <div className="bg-blue-50">
                      {BROKERDATA.map((broker, brokerIndex) => (
                        <div
                          key={brokerIndex}
                          className="px-4 py-2 flex justify-between items-center border-b border-blue-100"
                        > 
                          <span>{broker.name}</span>
                          {broker.price && (
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                broker.price.includes("Unlimited") 
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-500 text-white"
                              }`}
                            >
                              {broker.price}    
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
