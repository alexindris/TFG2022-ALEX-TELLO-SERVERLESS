import { IsString, IsDefined } from "class-validator";
import { HouseHold } from "./";

export class EarningCapacity {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    salaryFirstApplicant!: Float;

    @IsDefined()
    salarySecondApplicant!: Float;

    @IsDefined()
    rentalIncomeFinancedProperty!: Float;

    @IsDefined()
    rentalIncomeOtherProperties!: Float;

    @IsDefined()
    furtherIncome!: Float;

    @IsDefined()
    childBenefit!: Float;

    @IsDefined()
    assetsOnBankAccounts!: Float;

    @IsDefined()
    assetsOther!: Float;

    @IsDefined()
    Household!: HouseHold;

    @IsDefined()
    @IsString()
    householdId!: string;
}
