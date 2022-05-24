import { IsString, IsDefined, IsDate, IsIn } from "class-validator";
import { Address } from "./";
import { getEnumValues } from "../helpers";
import { Business, Employment, MaritalStatus } from "../enums";

export class Applicant {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    applicationNumber!: string;

    @IsDefined()
    @IsString()
    applicantNumber!: string;

    @IsDefined()
    @IsString()
    firstName!: string;

    @IsDefined()
    @IsString()
    lastName!: string;

    @IsDefined()
    @IsString()
    employer!: string;

    @IsDefined()
    @IsDate()
    employedSince!: Date;

    @IsDefined()
    @IsDate()
    birthday!: Date;

    @IsDefined()
    address!: Address[];

    @IsDefined()
    @IsIn(getEnumValues(Business))
    business!: Business;

    @IsDefined()
    @IsIn(getEnumValues(Employment))
    employment!: Employment;

    @IsDefined()
    @IsIn(getEnumValues(MaritalStatus))
    maritalStatus!: MaritalStatus;
}
