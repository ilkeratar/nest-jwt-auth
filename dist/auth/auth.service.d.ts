import { AuthPayloadDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser({ username, password }: AuthPayloadDto): string;
}
