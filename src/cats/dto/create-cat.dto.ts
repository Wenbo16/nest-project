import * as Joi from 'joi';
import { IsString, IsInt } from 'class-validator';

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

// export class CreateCatDto {
//   name: string;
//   age: number;
//   breed: string;
// }

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
