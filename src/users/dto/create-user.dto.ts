import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  cpf: string;

  @IsString()
  status: string;

  @IsString()
  birth_date: Date;

  @IsString()
  type: string;

  @IsString({ each: true })
  professions: string[];
}
