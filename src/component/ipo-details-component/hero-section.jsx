import React from "react";
import { IMAGE_URL } from "../../utils";

const HeroSection = ({ brokerType }) => {
  // console.log(IMAGE_URL.brokerType);

  return (
    <header className="bg-white py-8">
      <div className=" mx-auto p-4 ">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          {brokerType} Stock Trading, Demat, Brokerage and Reviews 2024
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={IMAGE_URL[brokerType]}
              alt={`${brokerType}`}
              className="w-41 h-27"
              style={
                { mixBlendMode: "multiply" }
              }
            />

          </div>


          {/* Description */}
          <p className="text-gray-700 mb-4">
            {brokerType} is India's leading stockbroker. It is among the largest and
            most reputed brokers offering online{" "}
            <span className="font-semibold">flat fee discount brokerage</span>{" "}
            services to invest in Equity, Currency, Commodity, IPO, Futures &
            Options, Bonds, Govt. Securities, and Direct Mutual Funds.
          </p>

        </div>
        <div>

          <p className="text-gray-700 ">
            {brokerType} charges <span className="font-bold">Rs 0 brokerage</span> for
            equity delivery trades and direct mutual funds. For intraday and
            Futures, it charges <span className="font-bold">flat Rs 20</span> or{" "}
            <span className="font-bold">0.03%</span> (whichever is lower) per
            trade. Further, for Options trades, it charges{" "}
            <span className="font-bold">Flat Rs 20</span> per executed order.
            That means with {brokerType}, the maximum brokerage you pay for any
            transaction is Rs 20 for an order (of any size, amount or segment).
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{brokerType} Fee Structure</h2>
          <ul className=" ml-4 list-disc">
            <li> Securities Transaction Tax (STT): This is charged only on the sell side for intraday and F&O trades. It is charged on both sides for Delivery trades in Equity.</li>
            <li>Transaction Charges (Exchnage Turnover Charges): This fee charged by the stock exchanges for using their trading platform.</li>
            <li>Goods and Services Tax (GST): This is charged at 18% of the total cost of brokerage plus SEBI charges and transaction charges.</li>
            <li> SEBI Charges: This is charged at Rs 10 per Crore.</li>
            <li>Stamp Duty: Eq Delivery - 0.015% (buy side), Eq Intraday - 0.003% (buy side)</li>
          </ul>
          <h2 className="text-2xl font-bold">{brokerType} Hidden Charges</h2>
          <p>{brokerType} brokerage hidden charges include call & trade charges, position squared-off by broker and SMS trade alerts as explained below:</p>
          <ol className=" ml-4 list-decimal">

            <li>Call and Trade feature is available at an extra cost of Rs 50 per call.</li>
            <li>Additional charge of Rs 50 per executed order for MIS/BO/CO positions which are not squared off by the customer.</li>
            <li>Digital Contract notes are sent via Email. Physical copies of contract notes can be ordered at an additional charge of Rs 20 per contract. Courier charges are extra.</li>
            <li>Trade SMS alerts (optional) are charged at Rs 1 for Equity, F&O, and Currency trade alerts and Rs 0.50 for Commodity trade alerts.</li>
            <li>Instant payment gateway charges for over 22 banks: Rs 9 per fund transfer.</li>
            <li>DP charges for delivery-based equity selling: Rs 13.5 + GST per transaction.</li>
          </ol>
          <h2 className="text-2xl font-bold">{brokerType} Online Account Opening</h2>
          <p>For online trading with {brokerType}, the investor has to open an account. Fill in an  to open an instant account and start trading the same day.</p>

          <h1 className="text-lg font-bold">Steps to open {brokerType} account online</h1>
          <ul className=" ml-4 list-decimal">
            <li>Visit {brokerType}.com</li>
            <li>Click on the signup button available at the right-hand side of the top menu</li>
            <li>Enter your mobile number</li>
            <li>Enter the OTP received on your mobile phone</li>
            <li>You will be required to enter your details, PAN, and bank account in the process.</li>
          </ul>
          <h1 className="text-2xl font-bold"> {brokerType} Trading Software ({brokerType} Trading Platforms)</h1>
          <p>  A customer can trade with {brokerType} in following ways:</p>




          <ul className="ml-4 list-decimal">
            <li className="text-xl font-bold"> Kite 3.0 (Web-based Trading Platform)</li>
            <p>Launched in November 2015, {brokerType} Kite Web is a web-based HTML 5 lightweight & fast trading platform which can be used for trading on mobile, tablets as well as on a web browser. Kite is developed in-house by {brokerType} and since its launch has undergone various updates. Currently, Kite 3.0 web platform is offered by {brokerType}. It offers full market watch, extensive charting with over 100 indicators and 6 chart types, advanced order types like Cover order, GTT order, millisecond order placements, and much more for trading at BSE, NSE and MCX. Kite Web 3.0 is available for free to all its customers. <span className="underline">Read {brokerType} Kite Review</span> </p>
            <li className="text-xl font-bold"> Kite Android / Kite iOS (Mobile Trading App)</li>
            <p> A smartphone application for Android and iOS. This app allows customers to trade from their mobile phones. Kite Mobile app is available for free to all {brokerType} customers for trading & monitoring stocks, currency, and commodity markets in India. With live streaming data from BSE, NSE and MCX, Kite Mobile App is the most advanced trading app available in India.</p>
            <li className="text-xl font-bold"> {brokerType} Console (Reporting Dashboard)</li>
            <p>Console is the back-office platform of {brokerType}. It's a trade and reporting dashboard wherein {brokerType} customers can view and monitor all their investments- stocks, derivatives and mutual funds etc. They can also access various reports, get account statements, place withdrawal requests and download contract notes. The 'Console' also offers analytics tools such as tradebook and heatmap.</p>
            <li className="text-xl font-bold">{brokerType} Sentinel (Price Alert Tools)</li>
            <p> Sentinel is a cloud-based tool which allows {brokerType} customers to set up price alerts on stocks, futures and options. The unique feature of Sentinel is that unlike other similar price alert tools that are machine dependent and only trigger when the computer is on, here price alerts can be triggered for any time, even when the computer is off. Notifications are sent on Kite and e-mail every time a price alert is triggered. With Sentinel, a trader can set real-time price alerts on 80,000 stocks, derivatives and bonds etc., across exchanges.</p>
            <li className="text-xl font-bold">{brokerType} Coin (Mutual Fund Investment)</li>
            <p>{brokerType} Coin is a Mutual Fund investment platform by {brokerType}. Coin allows people to invest in Direct Mutual Funds. This means you could do commission-free direct MF investment. It offers savings of over 1.5% on commissions every year. Mutual Funds are deposited in Demat account linked with {brokerType} trading account.</p>
            <li className="text-xl font-bold">Call & Trade</li>
            <p>Customers who are not online; can use Call & Trade function for placing orders. This will be at an additional cost of Rs 50 per trade.Partner Products From {brokerType}</p>
          </ul>
          <p> {brokerType} not only gives its customers access to its proprietary trading platforms and tools but also to products developed by other companies using the {brokerType} platform. The tools can be integrated with {brokerType}'s Kite platform. Trading platforms and tools offered by {brokerType} partners are-</p>
          <ul className="ml-4 list-disc">
            <li> <span className="font-bold">Smallcase-</span>  It is one of its kind thematic investment platforms that enables users to invest in a ready-made portfolio of stocks created around a theme/idea or a strategy. There are several choices in smallcases like Top 100 stocks, Electric Mobility, Insurance etc., for an investor to choose as per his investment strategy and invest in a single click.</li>
            <li> <span className="font-bold">Streak-</span>  An end-to-end cloud-based platform for retail traders to create algorithms without coding, Backtest it on historical data and execute them live in the market. It offers other features like real-time information, alerts and manage positions. </li>
            <li> <span className="font-bold">Sensibull-</span>  It is an options trading platform that suggests trading strategies to traders based on their market view. With Sensibull, traders can compare various strategies, evaluate their profitability, understand risks and then execute it from the platform. It also allows traders to create custom option trading strategies.</li>
            <li> <span className="font-bold">GoldenPi-</span>  It is an online bonds & debentures trading platform. The automated, and technology-enabled platform provides real-time updates on new investment options, incoming interest payments to your A/C, and personal assistance. GoldenPi doesn't charge any fee from customers. The minimum investing amount in bonds Rs 10,000.</li>
            <li> <span className="font-bold">Ditto-</span>  It is an online insurance platform. You can get effective and helpful advice on insurance from this app. The app offers various insurance solutions to cater its customers. This is an advice cum insurance investment platform where you can book a free call, understand your requirements and buy insurance accordingly. Customers can buy different types of health and life insurance from the app.</li>
          </ul>










        </div>
      </div>
    </header>
  );
};

export default HeroSection;
