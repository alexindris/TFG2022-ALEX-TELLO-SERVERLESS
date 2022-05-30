import { Address } from "./Address";

export interface Applicant {
  applicantNumber?: string;
  firstName: string;
  lastName: string;
  employer: string;
  employedSince: Date;
  birthday: Date;
  Address: Address;
  Business: string;
  Employment: string;
  MaritalStatus: string;
}
