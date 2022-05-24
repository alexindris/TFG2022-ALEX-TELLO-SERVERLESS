import { IsString, IsDefined, IsInt, IsOptional } from "class-validator";
import { EarningCapacity, MonthlyExpenses } from "./";

export class Household {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    applicationNumber!: string;

    @IsDefined()
    @IsInt()
    adultsInHousehold!: number;

    @IsDefined()
    @IsInt()
    childrenInHousehold!: number;

    @IsDefined()
    @IsString()
    iban!: string;

    @IsDefined()
    @IsString()
    bic!: string;

    @IsOptional()
    earningCapacity?: EarningCapacity;

    @IsOptional()
    monthlyExpenses?: MonthlyExpenses;
}
