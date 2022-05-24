import { IsString, IsDefined, IsDate, IsIn, IsOptional } from "class-validator";
import { Address, Application } from "./";
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
    Address!: Address[];

    @IsDefined()
    @IsIn(getEnumValues(Business))
    Business!: Business;

    @IsDefined()
    @IsIn(getEnumValues(Employment))
    Employment!: Employment;

    @IsDefined()
    @IsIn(getEnumValues(MaritalStatus))
    maritalStatus!: MaritalStatus;

    @IsOptional()
    FirstApplicant?: Application;

    @IsOptional()
    SecondApplicant?: Application;
}
