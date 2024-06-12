import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("userentity")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column({ default: false })
    problems: boolean;
}