import { IsString, IsDefined } from "class-validator";
import { Financing } from "./";

export class PurchaseCosts {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    priceOfLand!: Float;

    @IsDefined()
    reconstructionCosts!: Float;

    @IsDefined()
    additionalPurchaseCharges!: Float;

    @IsDefined()
    Financing!: Financing;

    @IsDefined()
    @IsString()
    financingId!: string;
}
