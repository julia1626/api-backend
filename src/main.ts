import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';  // Importa ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilitar o ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
