import React from "react";

function CircleIndicator({ color, label }) {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`h-4 w-4 rounded-full ${color}`}
        style={{ backgroundColor: color }}
      >
      </div>
        <span className="text-sm text-gray-700 ml-2 mr-2">{label}</span>  
    </div>   
  ); 
} 

export default CircleIndicator;
