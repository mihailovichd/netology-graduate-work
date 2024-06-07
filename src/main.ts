import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http.exception';
import { AppInterceptor } from './app.interceptor';

// TODO: Tests, Dockerfile, mongo docker-compose
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new AppInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(
    process.env.HTTP_PORT || 3000,
    process.env.HTTP_HOST || 'localhost',
  );
}
bootstrap();
