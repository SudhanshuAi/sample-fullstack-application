import { IsEnum, IsString } from 'class-validator';
import { Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  @IsString()
  title: string; // Add title property

  @ApiProperty()
  @IsString()
  body: string;

  @ApiProperty({ type: 'enum', enum: Status })
  @IsEnum(Status)
  status: Status;
}
