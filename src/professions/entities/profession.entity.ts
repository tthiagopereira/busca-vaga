import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professions')
export class Profession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
