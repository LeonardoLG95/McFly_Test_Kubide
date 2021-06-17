import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Notas')
  .setDescription('Notas de los usuarios')
  .setVersion('1.0')
  .addTag('notes')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions:{
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
