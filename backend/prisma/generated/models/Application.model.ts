import { IsString, IsDefined, IsOptional } from "class-validator";
import { Applicant, Financing, HouseHold } from "./";

export class Application {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    FirstApplicant!: Applicant;

    @IsDefined()
    SecondApplicant!: Applicant;

    @IsOptional()
    Financing?: Financing;

    @IsOptional()
    HouseHold?: HouseHold;

    @IsOptional()
    @IsString()
    applicantId?: string;

    @IsDefined()
    @IsString()
    firstApplicantId!: string;

    @IsDefined()
    @IsString()
    secondApplicantId!: string;
}
