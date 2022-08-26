import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profession } from '../../professions/entities/profession.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  status: string;

  @Column()
  birth_date: Date;

  @Column()
  type: string;

  @Column()
  password: string;

  @JoinTable()
  @ManyToMany(() => Profession, (profession: Profession) => profession.users, {
    cascade: true,
  })
  professions: Profession[];
}
