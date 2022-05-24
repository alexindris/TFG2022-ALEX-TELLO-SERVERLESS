import { IsString, IsDefined, IsOptional } from "class-validator";
import { OwnResources, PurchaceCosts, Loan } from "./";

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
    ownResources?: OwnResources;

    @IsOptional()
    purchaceCosts?: PurchaceCosts;

    @IsDefined()
    loans!: Loan[];

    @IsDefined()
    @IsString()
    ownResourcesId!: string;

    @IsDefined()
    @IsString()
    purchaceCostsId!: string;
}
