import { Applicant } from "./Applicant";
import { Financing } from "./Financing";
import { HouseHold } from "./HouseHold";
import { ObjectId } from "bson";

export interface Application {
  FirstApplicant: Applicant;
  SecondApplicant: Applicant;
  Financing: Financing;
  HouseHold: HouseHold;
  _id?: ObjectId;
  score?: number;
}
