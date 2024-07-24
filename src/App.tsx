import { FC } from "react";
import { StockTicker } from "./StockTicker";
import { Stock } from "./types";

const App: FC = () => {
  const stocks: Stock[] = [
    { symbol: "AAPL", price: 145.32, movement: "up" },
    { symbol: "TSLA", price: 672.37, movement: "down" },
  ];
  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto p-2">
        <h1 className="text-center text-4xl text-green-600 bg-black">
          Stock Market Game
        </h1>
      </div>
      <StockTicker stocks={stocks} />
    </div>
  );
};

export default App;
