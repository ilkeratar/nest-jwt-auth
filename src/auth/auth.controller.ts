import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from "./guards/local.guard";
import { JwtAuthGuard } from "./guards/jwt.guard";
import {Request} from "express";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login( @Body() authPayload: AuthPayloadDto) {
    const user = this.authService.validateUser(authPayload);
    return user;
  }


  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req:Request){
    console.log("Inside AuthController status method");
    console.log(req.user);
    return req.user;
  }
}
