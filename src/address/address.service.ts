import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }

  findAll() {
    return this.addressRepository.find();
  }

  async findOne(id: number) {
    const address = await this.addressRepository.findOne({
      where: {
        id,
      },
    });

    if (!address) {
      throw new NotFoundError(`Registro não encontrado com o id: ${id}`);
    }
    return address;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.addressRepository.preload({
      id,
      ...updateAddressDto,
    });
    if (!address) {
      throw new NotFoundError(`Id informado ${id} não existe`);
    }
    return this.addressRepository.save(address);
  }

  async remove(id: number) {
    const address = await this.findOne(id);
    return this.addressRepository.remove(address);
  }
}
