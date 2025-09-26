import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    public async loginUser(): Promise<void> {}

    public async registerUser(): Promise<void> {}
}