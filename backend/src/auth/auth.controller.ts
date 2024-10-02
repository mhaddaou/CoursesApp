import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';
import { RefreshToken } from './schemas/refresh-token.schema';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Post signup
  @Post('signup')
  async signup(@Body() signupData: SignupDto) {
    return await this.authService.signup(signupData);
  }

  // Post login
  @Post('login')
  async login(@Body() loginData: LoginDto) {
     return await this.authService.login(loginData);
  }

  // post refresh token
  @Post('refresh')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return await this.authService.refreshToken(refreshTokenDto.refreshToken);
  }
}
