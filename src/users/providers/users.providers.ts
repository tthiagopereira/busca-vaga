import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Profession } from '../../professions/entities/profession.entity';

export const UsersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PROFESSION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Profession),
    inject: ['DATA_SOURCE'],
  },
];
