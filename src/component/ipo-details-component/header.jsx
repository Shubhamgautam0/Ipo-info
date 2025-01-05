import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>Brokerage</li>
        <li>Mobile App</li>
        <li>Account Opening</li>
        <li>Calculator</li>
        <li>Demat</li>
        <li>IPO</li>
        <li>Branches</li>
      </ul>
      <ul className="flex space-x-4">
        <li>Mutual Fund</li>
        <li>Is It Safe?</li>
        <li>API</li>
        <li>Complaints</li>
        <li>FAQ's</li>
      </ul>
    </nav>
  );
};

export default Header;
