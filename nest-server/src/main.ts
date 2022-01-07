import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser  from 'body-parser';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();

  const APP_NAME = 'SF-Drive'
  const APP_VERSION = '1.0.0'

  const options = new DocumentBuilder()
      .setTitle(APP_NAME)
      .setDescription(`The ${APP_NAME} docs`)
      .setVersion(APP_VERSION)
      .build()

  const doc = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, doc)

  await app.listen(8000);
}
bootstrap();
