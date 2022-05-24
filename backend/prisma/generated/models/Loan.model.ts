import { IsString, IsDefined, IsOptional } from "class-validator";
import { Financing } from "./";

export class Loan {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    loanAmount!: Float;

    @IsDefined()
    interestRate!: Float;

    @IsDefined()
    repaymentInPercent!: Float;

    @IsDefined()
    fixedInterestRateInYears!: Float;

    @IsOptional()
    Financing?: Financing;

    @IsOptional()
    @IsString()
    financingId?: string;
}
