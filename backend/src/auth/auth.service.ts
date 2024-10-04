import {
  BadRequestException,
  Body,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { RefreshToken } from './schemas/refresh-token.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(RefreshToken.name)
    private refreshTokenModel: Model<RefreshToken>,
    private jwtService: JwtService,
  ) {}

  async signup(@Body() signupData: SignupDto) {
    try {
      const { username, email, password } = signupData;

      // check if email is in use
      const emailInUse = await this.userModel.findOne({
        email,
      });
      if (emailInUse) {
        throw new Error('Email already in use');
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create user document and save in mongodb
      const user = await this.userModel.create({
        username,
        email,
        password: hashedPassword,
      });

      return { message: 'User created successfully', email: user.email };
    } catch (e) {
      Logger.error(e.message);
    }
  }

  async login(credentials: LoginDto) {
    try {
      const { email, password } = credentials;

      // Find if userexists by email
      const user = await this.userModel.findOne({ email });
      if (!user) throw new UnauthorizedException('Wrong credentials');

      // Comapre entered password with hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) throw new BadRequestException('Wrong credentials');

      // Generate JWT token

      return this.generateUserToken(user._id);
    } catch (e) {
      Logger.error(e.message)
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const token = await this.refreshTokenModel.findOne({
        token: refreshToken,
        expiryDate: { $gte: new Date() },
      });
      if (!token) throw new UnauthorizedException('user should be login again');
      return await this.generateUserToken(token.userId);
    } catch (e) {
      Logger.error(e.message);

    }
  }

  async generateUserToken(userId) {
    try {
      const accessToken = this.jwtService.sign({ userId });
      const refreshToken = uuidv4();
      await this.storeRefreshToken(refreshToken, userId);
      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      Logger.error(e.message);
    }
  }

  async storeRefreshToken(token: string, userId) {
    try {
      const expiryDate = new Date();
      // Calculate expiry date 3 days from now
      expiryDate.setDate(expiryDate.getDate() + 3);
      const filter = { userId };
      const update = { $set: { expiryDate, token } };
      const options = { upsert: true };
      await this.refreshTokenModel.updateOne(filter, update, options);
    } catch (e) {
      Logger.error(e.message);
    }
  }
}
