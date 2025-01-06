import React from "react";
import Section from "../../../component/common-component/section";
import { IPODATA, RIGHTISSUEDATA, SMEIPODATA, NCDDATA, STOCKBROKER, FULLSERVICEBROKER, IPONEWSALERT, EBOOKDATA } from "../../../utils";
import CircleIndicator from "../../../component/common-component/circle-indicator";

function IPOList() {
  return (
    <div className="mx-auto p-4">
      <div className="flex">
        <CircleIndicator color="bg-red-500" label="Red Indicator" />
        <CircleIndicator color="bg-green-500" label="Green Indicator" />
        <CircleIndicator color="bg-blue-500" label="Blue Indicator" />
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        <Section title="IPO 2024 List (Mainboard)" data={IPODATA} />
        <Section title="NCD Issues" data={NCDDATA} />
        <Section title="SME IPO 2024 List" data={SMEIPODATA} />
        <Section title="Rights Issue 2024" data={RIGHTISSUEDATA} /> 
        <Section title="Stock Broker Reviews India" data={STOCKBROKER} />
        <Section title="Full-service Brokers Review" data={FULLSERVICEBROKER} />
        <Section title="IPO News Alerts" data={IPONEWSALERT} /> 
        <Section title="eBooks (Learn IPO, RI, BB, NCD)" data={EBOOKDATA} /> 
        {/* <Section title="eBooks (Learn IPO, RI, BB, NCD)" data={EBOOKDATA} />  */}

      </div>
    </div>
  );
}

export default IPOList; 
