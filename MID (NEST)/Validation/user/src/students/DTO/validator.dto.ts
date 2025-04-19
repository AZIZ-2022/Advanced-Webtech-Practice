import { IsNotEmpty } from "class-validator";

export class validator{
    @IsNotEmpty()
    name:string
}