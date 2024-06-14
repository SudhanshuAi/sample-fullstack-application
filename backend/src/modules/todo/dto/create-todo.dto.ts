import { IsEnum, IsString } from "class-validator";
import { Status } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty()
    @IsString()
    title: string;  // Change this from body to title

    @ApiProperty({type: 'enum', enum: ['PENDING', 'DONE']})
    @IsEnum(Status)
    status: Status;
}
