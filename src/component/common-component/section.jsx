import React from "react";

function Section({ title = ["Popular Article & Tutorials", "Popular Reports"], data }) {
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
            <tr>
              <td className="border border-gray-300 p-2">
                <h2 className="font-bold">Monday, January 6, 2025</h2>
                <ul className="lg:ml-4 list-disc">
                  <li> Last Day to participate in Nibe Ordnance and Maritime Limited Rights Issue </li>
                  <li> Parmeshwar Metal SME IPO closes today </li>
                  <li> Davin Sons SME IPO closes today </li>
                  <li> Indobell Insulation SME IPO opens today </li>
                  <li> Standard Glass Lining IPO opens today </li>
                  <li> Barflex Polyfilms IPO opens on Friday, January 10, 2025 </li>
                  <li> Sat Kartar Shopping IPO opens on Friday, January 10, 2025 </li>
                </ul>

                <h2 className="font-bold">Friday, January 3, 2025</h2>
                <ul className="lg:ml-4 list-disc">
                  <li> Technichem Organics IPO allotment status ou</li>
                  <li> Leo Dry Fruits and Spices IPO Subscribed 180.83x on day </li>
                  <li> Fabtech Technologies IPO Subscribed 19.6x on day </li>
                  <li> Davin Sons IPO Subscribed 12.44x on day 2.</li>
                  <li> Parmeshwar Metal IPO Subscribed 44.16x on day 2.</li>
                  <li> Nibe Ordnance and Maritime Rights Issue 2024 opens on Friday, January 17, 2025.</li>
                  <li> Camlin Fine Sciences Rights Issue 2024 opens on Friday, January 17, 2025.</li>
                  <li> Avax Apparels And Ornaments IPO opens on Tuesday, January 7, 2025.</li>
                  <li> Leo Dry Fruits and Spices SME IPO closes today.</li>
                  <li> Fabtech Technologies SME IPO opens today.</li>
                  <li> Indo Farm Equipment IPO allotment status out.</li>
                </ul>
                <h2 className="font-bold">Thursday, January 2, 2025</h2>
                <ul className="lg:ml-4 list-disc">
                  <li> Indo Farm Equipment IPO Subscribed 227.31x on day 3 </li>
                  <li> Technichem Organics IPO Subscribed 424.25x on day 3 </li>
                  <li> Leo Dry Fruits and Spices IPO Subscribed 14.02x on day 2 </li>
                  <li> Davin Sons IPO Subscribed 2.7x on day 1 </li>
                  <li> Parmeshwar Metal IPO Subscribed 13.38x on day 1 </li>
                  <li> Edelweiss Financial Services NCD December 2024 opens on Tuesday, January 7, 2025 </li>
                  <li> B.R.Goyal IPO opens on Tuesday, January 7, 2025  </li>
                  <li> Technichem Organics SME IPO closes today </li>
                  <li> Parmeshwar Metal SME IPO opens today </li>
                  <li> Davin Sons SME IPO opens today </li>
                  <li> Indo Farm Equipment IPO closes today </li>
                </ul>


              </td>
            </tr>

          ) : title === "eBooks (Learn IPO, RI, BB, NCD)" ? (

            <tr>
              <td className="border border-gray-300 p-2">
                <h2 className="underline ">Introduction to IPO</h2>
                <ul className="lg:ml-4 list-disc">
                  <li>IPO Basics</li>
                  <li>IPO Eligibility</li>
                  <li> IPO Pricing</li>
                  <li>IPO Process</li>
                  <li>IPO Intermediaries</li>
                  <li>IPO Investors</li>
                  <li>IPO Prospectus</li>
                  <li>IPO Valuation</li>
                  <li>IPO Application</li>
                  <li> ASBA IPO</li>
                  <li>UPI IPO Application</li>
                  <li>IPO Application Modification</li>
                  <li>IPO Subscription</li>
                  <li>IPO Listing</li>
                  <li>IPO Funds Unblocking</li>
                  <li> IPO Allotment</li>
                  <li> Unlisted Shares</li>
                  <li>IPO Grey Market</li>
                  <li> IPO KPIs</li>
                </ul>


                <h2 className="underline">Buyback of Shares</h2>
                <ul className="lg:ml-4 list-disc"><li>Introduction to Buyback of shares</li></ul>
                <h2>SME IPO Guide for companies</h2>
                <ul className="lg:ml-4 list-disc">
                  <li>
                    Ways to raise funds for business </li>
                  <li>SME IPO Introduction</li>
                  <li>SME Exchanges in India</li>
                  <li>SME IPO Eligibility</li>
                  <li> SME IPO Process</li>
                  <li>SME IPO Intermediaries</li>
                  <li>SME IPO Expenses</li>
                  <li>SME IPO Post Listing Compliance</li>

                </ul>
                <h2 className="underline">NCD (Non-convertible debentures)</h2>
                <ul className="lg:ml-4 list-disc">
                  <li>Introduction to NCD</li>
                  <li>NCD IPO</li>
                  <li>NCD IPO Process</li>
                  <li>NCD Intermediaries</li>
                  <li> NCD Offer Document</li>
                  <li>NCD Investors</li>
                  <li>NCD Application Process</li>
                  <li>NCD Subscription and Allotment Process</li>
                </ul>
              </td>
            </tr>

          ) : null}

        </tbody>
      </table>
    </div>
  );
}

export default Section;
