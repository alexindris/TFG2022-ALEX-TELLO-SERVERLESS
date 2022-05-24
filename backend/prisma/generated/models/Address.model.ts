import { IsString, IsDefined } from "class-validator";
import { Applicant } from "./";

export class Address {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    Applicant!: Applicant;

    @IsDefined()
    @IsString()
    applicantId!: string;

    @IsDefined()
    @IsString()
    userId!: string;

    @IsDefined()
    @IsString()
    street!: string;

    @IsDefined()
    @IsString()
    city!: string;

    @IsDefined()
    @IsString()
    postCode!: string;
}
