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

    return (
      <div className="absolute max-w-screen  mt-3 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3 " >
        <div
          className="grid gap-1 auto-rows-auto "
          style={{
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            gridAutoFlow: "column",
            width: `${columns * 200}px`,
            minWidth: "max-content",
          }}
        >
          {items.map((item, index) => (  
            <div
              key={index} 
              onClick={menuItemsClick}  
              className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded transition-colors duration-150 truncate"
            >  
              {item} 
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
              <div className="flex items-center gap-4 space-x-4">

                <div className="  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-8 cursor-pointer"
                  >
                    <path
                      d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.015-8 4.5V20a1 1 0 001 1h14a1 1 0 001-1v-1.5c0-2.485-3.582-4.5-8-4.5z"
                    />
                  </svg>

                </div>


                {/* Moon Icon */}
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-8 cursor-pointer"
                  >
                    <path
                      d="M21.752 15.002a8.385 8.385 0 01-6.268 3.498 8.503 8.503 0 01-8.5-8.5c0-3.335 1.986-6.324 5.055-7.652.35-.154.741-.135 1.065.053a.94.94 0 01.432.984 6.556 6.556 0 000 6.03c.3.681.748 1.294 1.3 1.775.92.8 2.13 1.244 3.367 1.244a6.556 6.556 0 004.645-1.894.94.94 0 01.982-.432c.188.072.347.197.453.365a8.385 8.385 0 013.498 6.268c.015.17-.022.345-.097.503a1.012 1.012 0 01-.481.481z"
                    />
                  </svg>


                </div>

                {/* Mail Icon */}
                <svg
                  className="w-5 h-8 cursor-pointer"
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
                  className="w-5 h-8 cursor-pointer"
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
                  className="w-5 h-8 cursor-pointer"
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
