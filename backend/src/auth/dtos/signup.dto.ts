import {
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
