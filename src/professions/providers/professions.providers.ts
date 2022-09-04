import { DataSource } from 'typeorm';
import { Profession } from '../entities/profession.entity';

export const ProfessionsProviders = [
  {
    provide: 'PROFESSIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Profession),
    inject: ['DATA_SOURCE'],
  },
];
