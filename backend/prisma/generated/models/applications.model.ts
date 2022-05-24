import { IsString, IsDefined } from "class-validator";
import "./";

export class applications {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    description!: string;

    @IsDefined()
    @IsString()
    name!: string;
}
