import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from './validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // async create(@Body() createCatDto: CreateCatDto) {
  //   console.log(createCatDto);
  //   this.catsService.create(createCatDto);
  // }

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  // findAll(@Req() request: Request): string {
  async findAll() {
    try {
      const cats = await this.catsService.findAll();
      return cats;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(@Param('id', ValidationPipe) id: string): string {
    // findOne(@Param() params: any): string {
    return `This action returns a #${id} cat`;
  }
}
