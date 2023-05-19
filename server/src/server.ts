import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import jwt from '@fastify/jwt';
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';
import { uploadRoutes } from './routes/upload';
import { resolve } from 'node:path';

const app = fastify();

app
  .register(multipart);

app
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .register(require('@fastify/static'), {
    root: resolve(__dirname, '../uploads'),
    prefix: '/uploads',
  });

app
  .register(jwt, {
    secret: 'spacetime',
  });

app
  .register(cors, {
    origin: true,
  });


app
  .register(authRoutes);

app
  .register(uploadRoutes);

app
  .register(memoriesRoutes);


app
  .listen({
    port: 3333,
  }).then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333...');
  });
