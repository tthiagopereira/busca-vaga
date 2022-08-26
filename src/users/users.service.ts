import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';
import { Profession } from '../professions/entities/profession.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profession)
    private readonly professionRepository: Repository<Profession>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const professions = await Promise.all(
      createUserDto.professions.map((name) => this.preloadProfessionName(name)),
    );
    const user = this.userRepository.create({
      ...createUserDto,
      professions,
    });
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    const user = this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundError(`Id informado ${id} não existe`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const professions =
      updateUserDto.professions &&
      (await Promise.all(
        updateUserDto.professions.map((name) =>
          this.preloadProfessionName(name),
        ),
      ));

    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
      professions,
    });

    if (!user) {
      throw new NotFoundError(`Id informado ${id} não existe`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    return this.userRepository.remove(user);
  }

  private async preloadProfessionName(name: string): Promise<Profession> {
    const profession = await this.professionRepository.findOne({
      where: {
        name,
      },
    });

    if (profession) {
      return profession;
    }

    return this.professionRepository.create({ name });
  }
}
