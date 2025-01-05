import React from "react";

function Section({ title, data }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">

            {title === "IPO 2024 List (Mainboard)" ||
              title === "NCD Issues" ||
              title === "SME IPO 2024 List" ? (
              <>
                <th className="border border-gray-300 p-2">Issuer Company</th>
                <th className="border border-gray-300 p-2">Open</th>
                <th className="border border-gray-300 p-2">Close</th>
              </>
            ) :
              title === "Rights Issue 2024" ? (
                <>
                  <th className="border border-gray-300 p-2">Issuer Company</th>
                  <th className="border border-gray-300 p-2">Open</th>
                  <th className="border border-gray-300 p-2">Renunciation</th>
                </>
              ) : title === "Stock Broker Reviews India" ? (
                <>
                  <th className="border border-gray-300 p-2">Broker</th>
                  <th className="border border-gray-300 p-2">Delivery Brokerage</th>
                  <th className="border border-gray-300 p-2">Account Opening</th>
                </>
              ) : title === "Full-service Brokers Review" ? (
                <>
                  <th className="border border-gray-300 p-2">Broker</th>
                  <th className="border border-gray-300 p-2">AccountOpening</th>
                  <th className="border border-gray-300 p-2">Demat AMC</th>
                </>
              ) : title === "IPO News Alerts" ? (
                <>
                  <th className="border border-gray-300 p-2">IPO News Alerts</th>
                  {/* <th className="border border-gray-300 p-2">AccountOpening</th>
                <th className="border border-gray-300 p-2">Demat AMC</th>  */}
                </>
              ) : title === "eBooks (Learn IPO, RI, BB, NCD)" ? (
                <>
                  <th className="border border-gray-300  p-2">eBooks (Learn IPO, RI, BB, NCD)</th>
                </>
              ) : null}


          </tr>
        </thead>
        <tbody>
          {/* Conditionally render table rows based on the title */}
          {title === "IPO 2024 List (Mainboard)" ||
            title === "NCD Issues" ||
            title === "SME IPO 2024 List" ||
            title === "Rights Issue 2024" ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="border border-gray-300 p-2">{item.company}</td>
                <td className="border border-gray-300 p-2">{item.open}</td>
                <td className="border border-gray-300 p-2">{item.close}</td>
              </tr>
            ))
          ) : title === "Stock Broker Reviews India" ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="border border-gray-300 p-2">{item.broker}</td>
                <td className="border border-gray-300 p-2">
                  {item.deliveryBrokerage}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.accountOpening}
                </td>
              </tr>
            ))
          ) : title === "Full-service Brokers Review" ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="border border-gray-300 p-2">{item.broker}</td>
                <td className="border border-gray-300 p-2">
                  {item.accountOpening}
                </td>
                <td className="border border-gray-300 p-2">{item.dematAMC}</td>
              </tr>
            ))
          ) : title === "IPO News Alerts" ? (
            data.map((item, index) => (
              <tr key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}>

                <td className="border border-gray-300 p-2">{item.news.map((news, index) => {
                  return <ul> 
                    
                      <li className=" ml-4 list-disc" >{news}</li> 
                  </ul>   
                })}</td>
              </tr> 

            ))
          ) : title === "eBooks (Learn IPO, RI, BB, NCD)" ? (
            data.map((item, index) => (
              <tr key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="border border-gray-300 p-2">
                {item.topics.map((topic,index) => {
                  return <ul> 
                    
                      <li className=" ml-4 list-disc" >{topic}</li> 
                  </ul>   
                })}
                  </td> 
              </tr>
            ))
          ) : null}

        </tbody>
      </table>
    </div>
  );
}

export default Section;
