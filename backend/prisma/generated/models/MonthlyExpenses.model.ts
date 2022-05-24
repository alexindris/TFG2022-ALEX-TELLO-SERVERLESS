import { IsString, IsDefined, IsBoolean } from "class-validator";
import { HouseHold } from "./";

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
    Household!: HouseHold;

    @IsDefined()
    @IsString()
    householdId!: string;
}
