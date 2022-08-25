import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profession } from './entities/profession.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessionsService {
  constructor(
    @InjectRepository(Profession)
    private readonly professionReposiroty: Repository<Profession>,
  ) {}

  create(createProfessionDto: CreateProfessionDto) {
    const profession = this.professionReposiroty.create(createProfessionDto);
    return this.professionReposiroty.save(profession);
  }

  findAll() {
    return this.professionReposiroty.find();
  }

  async findOne(id: number) {
    const professions = await this.professionReposiroty.findOne({
      where: {
        id,
      },
    });

    if (!professions) {
      throw new NotFoundException(`Registro não encontrado: ${id}`);
    }
    return professions;
  }

  async update(id: number, updateProfessionDto: UpdateProfessionDto) {
    const profession = await this.professionReposiroty.preload({
      id,
      ...updateProfessionDto,
    });

    if (!profession) {
      throw new NotFoundException(`Registro não encontrado: ${id}`);
    }

    return this.professionReposiroty.save(profession);
  }

  async remove(id: number) {
    const profession = await this.findOne(id);
    return this.professionReposiroty.remove(profession);
  }
}
