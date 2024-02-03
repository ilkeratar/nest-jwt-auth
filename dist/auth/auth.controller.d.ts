/// <reference types="passport" />
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authPayload: AuthPayloadDto): string;
    status(req: Request): Express.User;
}
