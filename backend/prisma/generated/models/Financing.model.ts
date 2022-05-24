import { IsString, IsDefined, IsOptional } from "class-validator";
import { OwnResources, PurchaseCosts, Loan, Application } from "./";

export class Financing {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    applicationNumber!: string;

    @IsDefined()
    financingNeeds!: Float;

    @IsOptional()
    OwnResources?: OwnResources;

    @IsOptional()
    PurchaseCosts?: PurchaseCosts;

    @IsDefined()
    Loans!: Loan[];

    @IsDefined()
    @IsString()
    ownResourcesId!: string;

    @IsDefined()
    @IsString()
    purchaseCostsId!: string;

    @IsDefined()
    Application!: Application;
}
