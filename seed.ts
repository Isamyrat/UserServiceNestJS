import { createConnection } from 'typeorm';
import { User } from './src/user/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();
async function seed() {
    const connection = await createConnection({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
        synchronize: true,
    });
    const userRepository = connection.getRepository(User);

    for (let i = 0; i < 1000000; i++) {
        const user = new User();
        user.firstName = `Андрей${i}`;
        user.lastName = `Горохов${i}`;
        user.age = Math.floor(Math.random() * 100);
        user.gender = i % 2 === 0 ? 'male' : 'female';
        user.problems = Math.random() < 0.5;

        await userRepository.save(user);
    }

    await connection.close();
}

seed();