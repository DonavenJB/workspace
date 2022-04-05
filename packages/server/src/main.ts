import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';

// Server entry. NestJS for structure, Fastify for speed.
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Client is a separate origin.
  app.enableCors({ origin: true, credentials: true });

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0');

  // eslint-disable-next-line no-console
  console.log(`⚔  Empiryu server on http://localhost:${port}  (GET /health)`);
}

void bootstrap();
