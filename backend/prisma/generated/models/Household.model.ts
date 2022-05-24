import { IsString, IsDefined, IsInt, IsOptional } from "class-validator";
import { EarningCapacity, MonthlyExpenses, Application } from "./";

export class HouseHold {
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
    EarningCapacity?: EarningCapacity;

    @IsOptional()
    MonthlyExpenses?: MonthlyExpenses;

    @IsDefined()
    Application!: Application;
}
