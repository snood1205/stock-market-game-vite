import { FC } from "react";
import { Stock } from "../types";
import { StockTick } from "./StockTick";

interface Props {
  stocks: Stock[];
}

export const StockTicker: FC<Props> = ({ stocks }: Props) => {
  return (
    <div className="overflow-hidden relative w-full h-10">
      <div className="absolute top-0 left-full whitespace-nowrap animate-ticker">
        {stocks.map((stock) => (
          <StockTick key={stock.symbol} {...stock} />
        ))}
      </div>
    </div>
  );
};
