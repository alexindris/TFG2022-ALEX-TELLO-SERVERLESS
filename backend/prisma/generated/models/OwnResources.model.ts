import { IsString, IsDefined, IsOptional } from "class-validator";
import { Financing } from "./";

export class OwnResources {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    liquidAssets!: Float;

    @IsDefined()
    balanceFromBuildingSociety!: Float;

    @IsDefined()
    ownManpower!: Float;

    @IsOptional()
    Financing?: Financing;

    @IsOptional()
    @IsString()
    financingId?: string;
}
