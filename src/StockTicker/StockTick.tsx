import { FC } from "react";
import { Stock } from "../types";

export const StockTick: FC<Stock> = ({ movement, price, symbol }) => (
  <span
    className={`text-2xl ${
      movement === "up" ? "text-green-500" : "text-red-500"
    }`}
  >
    {movement === "up" ? "📈" : "📉"} {symbol} {price}
  </span>
);
