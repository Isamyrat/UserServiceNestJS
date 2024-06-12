import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('fix-problems')
    async fixProblems(): Promise<{ count: number }> {
        const count = await this.userService.markProblemsFalse();
        return { count };
    }
}