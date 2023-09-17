import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // Now any module that imports the CatsModule has access to
  // the CatsService and will share the same instance with all other modules that import it as well.
  exports: [CatsService],
})
export class CatsModule {}
