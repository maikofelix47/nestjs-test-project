import { Controller, Get , Post } from '@nestjs/common';

@Controller('cats')

export class CatsController {
  @Post()
  create(): string{
    return 'This action creates a new cat';
  }
  @Get()
  findAll(): string {
    return 'This Action returns all cats';
  }
}