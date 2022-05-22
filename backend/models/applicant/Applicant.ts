import { Address } from "./Address";
import { Business } from "./Bussiness";
import { Employment } from "./Employment";

export class Applicant {
  private id: string;
  private applicationNumber: string;
  private applicantNumber: string;
  private customerNumber: string;
  private firstName: string;
  private lastName: string;
  private address : Address;
  private bussines : Business;
  private employment: Employment;
  private employer: string;
  private employedSince: Date;
  private birthday: Date;

  constructor(applicationNumber: string, applicantNumber: string, customerNumber: string, firstName: string, lastName: string, address: Address, bussines: Business, employment: Employment, employer: string, employedSince: Date, birthday: Date) {
