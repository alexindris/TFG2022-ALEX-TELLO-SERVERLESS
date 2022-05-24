import { IsString, IsDefined, IsBoolean } from "class-validator";
import { Household } from "./";

export class MonthlyExpenses {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    healthInsuranceFirstApplicant!: Float;

    @IsDefined()
    healthInsuranceSecondApplicant!: Float;

    @IsDefined()
    otherLoansRemainderOfDebt!: Float;

    @IsDefined()
    otherLoansMonthlyRepayments!: Float;

    @IsDefined()
    costOfLiving!: Float;

    @IsDefined()
    rent!: Float;

    @IsDefined()
    @IsBoolean()
    rentNotApplicableInFuture!: boolean;

    @IsDefined()
    Household!: Household;

    @IsDefined()
    @IsString()
    householdId!: string;
}
