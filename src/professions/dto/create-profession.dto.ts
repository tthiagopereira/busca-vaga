import { IsString } from 'class-validator';

export class CreateProfessionDto {
  @IsString()
  name: string;
}
