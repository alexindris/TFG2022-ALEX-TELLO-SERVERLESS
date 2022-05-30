import { Loan } from "./Loan";
import { OwnResources } from "./OwnResources";
import { PurchaseCosts } from "./PurchaseCosts";

export interface Financing {
  financingNeeds: number;
  OwnResources: OwnResources;
  PurchaseCosts: PurchaseCosts;
  Loans: Loan[];
}
