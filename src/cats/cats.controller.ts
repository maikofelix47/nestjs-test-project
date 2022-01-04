import { Controller, Get , Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')

export class CatsController {
  constructor(private catsService: CatsService){

  }

  @Post()
  async create(cat: Cat){
    this.catsService.create(cat);
  }
  @Get()
  findAll(): string {
    return 'This Action returns all cats';
  }
}