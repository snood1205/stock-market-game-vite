export type Movement = "up" | "down";

export interface Stock {
  movement: Movement;
  price: number;
  symbol: string;
}
