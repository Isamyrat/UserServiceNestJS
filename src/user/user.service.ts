import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async markProblemsFalse(): Promise<number> {
        const usersWithProblems = await this.userRepository.find({
            where: { problems: true },
        });

        await this.userRepository.update({ problems: true }, { problems: false });

        return usersWithProblems.length;
    }
}