import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  road: string;

  @Column()
  number: string;

  @Column()
  cep: string;

  @Column()
  user_id: number;
}
