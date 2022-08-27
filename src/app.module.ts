import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UtilService } from './util/util.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { ProfessionsModule } from './professions/professions.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: Number(process.env.DATABASE_PORT),
      username: 'postgres',
      password: '1234',
      database: 'busca_servico',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    AddressModule,
    ProfessionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UtilService],
})
export class AppModule {}
