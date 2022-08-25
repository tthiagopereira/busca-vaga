import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  road: string;

  @IsString()
  number: string;

  @IsString()
  cep: string;

  @IsNumber()
  user_id: number;
}
