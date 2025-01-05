import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./sidebar";
import { MAINMENUITEMS } from "../../utils";
import ThemeLightDark from "./dark-lightmode";

const NavigationMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      document.documentElement.classList.toggle("dark", savedMode === "dark");
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }; 

  const handleHomeClick = () => {
    navigate("../");
  };
  const menuItemsClick = () => {
    navigate("/ipo/ipo_dashboard.asp")
  }
  const DropdownMenu = ({ items, columns  }) => { 
    const rows = Math.ceil(items.length / columns); 

  // const DropdownMenu = ({sections}) => {

    return (
      // <div className="absolute max-w-screen  mt-3 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3 " >
      //   <div
      //     className="grid gap-1 auto-rows-auto "
      //     style={{
      //       gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      //       gridAutoFlow: "column",
      //       width: `${columns * 200}px`,
      //       minWidth: "max-content",
      //     }}
      //   >
      //     {items.map((item, index) => (  
      //       <div
      //         key={index} 
      //         onClick={menuItemsClick}  
      //         className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded transition-colors duration-150 truncate"
      //       >  
      //         {item} 
      //       </div>

      //     ))}
      //   </div>
      // </div> 
      <div className="relative">
        {/* Dropdown menu container */}
        <div className="absolute bg-gray-800 border border-gray-700 text-gray-300 shadow-lg rounded-lg p-5 grid grid-cols-6 gap-4">
          {MAINMENUITEMS.map((section, index) => ( 
            <div key={index} className="space-y-2">
              {/* Section title */}
              <h3 className="font-semibold text-white">{section.title}</h3>
              {/* Section items */}
              {section.items.map((item, idx) => ( 
                <a
                  key={idx}
                  href="#"
                  className="block text-sm hover:text-yellow-300 hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="">
        <img
          src="https://www.chittorgarh.net/images/chittorgarh-logo.png"
          alt=""
        />
      </div>

      <div className="bg-gray-600 text-white ">
        {/* Main Navigation */}
        <nav className="mx-auto">
          <div className="flex items-center h-16 px-4">
            {/* Sidebar Toggle */}
            <SidebarMenu />

            {/* Home Icon */}
            <div className="mr-6" onClick={handleHomeClick}>
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-between items-center ">
              <div className="flex space-x-1">
                {MAINMENUITEMS.map((item, index) => (

                  <div key={index} className="relative group">
                    <button
                      className={`px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded flex items-center
                      ${activeDropdown === index ? "bg-gray-700" : ""}`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                    >
                      {item.title}
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : "rotate-0"
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
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === index && (
                      <DropdownMenu  
                      items={
                        Array.isArray(item.items1)
                          ? [
                            ...(item.items1 || []),
                            ...(item.items2 || []),
                            ...(item.items3 || []),
                            ...(item.items4 || []),
                            ...(item.items5 || []),
                            ...(item.items6 || []), 
                          ]
                          : item.items || []
                      }
                      columns={item.items1 ? 6 : 1} 
                      onMouseLeave={() => setActiveDropdown(null)} 
                      />
                    )}

                  </div>
                ))}
              </div>

              {/* Right Side Icons */}
              <div className="flex items-center space-x-4">

                <div className=" p-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 20"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="8" r="3" fill="white" />

                    <path
                      d="M10 14c0-2 2-3 2-3s2 1 2 3v4H10v-4z"
                      fill="white"
                    />

                    <circle cx="6.5" cy="9" r="2" fill="white" />
                    <path
                      d="M5.5 14c0-1.5 1.5-2.5 1.5-2.5s1.5 1 1.5 2.5v2.5H5.5V14z"
                      fill="white"
                    />
                    <circle cx="17.5" cy="9" r="2" fill="white" />
                    <path
                      d="M16.5 14c0-1.5 1.5-2.5 1.5-2.5s1.5 1 1.5 2.5v2.5h-3V14z"
                      fill="white"
                    />
                  </svg>



                </div>


                {/* Moon Icon */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded hover:bg-gray-700"
                  >
                    {isDarkMode ? (
                      <svg
                        className="w-6 h-6 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-7.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l-.707.707M7.757 7.757l-.707.707"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0020.354 15.354z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Mail Icon */}
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                {/* Search Icon */}
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {/* Share Icon */}
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 z-50">
            <div className="p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="space-y-2 mt-12">
                {MAINMENUITEMS.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 rounded flex items-center justify-between"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                    >
                      {item.title}
                      <svg
                        className="w-4 h-4"
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
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                          >
                            {subItem}
                          </a>
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
    </>
  );
};

export default NavigationMenu;
