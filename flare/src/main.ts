import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Curate AI')
    .setDescription('The Curate AI API description')
    .addTag('Curate AI')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  const port = process.env.PORT || 3003;
  await app.listen(port);

  Logger.log(`Application is running on: http://localhost:${port}`);
  Logger.log(`Swagger UI: http://localhost:${port}/swagger`);
}
bootstrap();
