import { EarningCapacity } from "./EarningCapacity";
import { MonthlyExpenses } from "./MonthlyExpenses";

export interface HouseHold {
  adultsInHousehold: number;
  childrenInHousehold: number;
  iban: string;
  bic: string;
  EarningCapacity: EarningCapacity;
  MonthlyExpenses: MonthlyExpenses;
}
