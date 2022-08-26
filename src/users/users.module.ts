import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profession } from '../professions/entities/profession.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profession])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
