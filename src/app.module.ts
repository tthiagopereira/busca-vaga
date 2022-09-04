import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UtilService } from './util/util.service';
import { AddressModule } from './address/address.module';
import { ProfessionsModule } from './professions/professions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, UtilService],
})
export class AppModule {}
