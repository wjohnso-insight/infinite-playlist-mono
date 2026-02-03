/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import 'dotenv/config'
import express from 'express';
import * as path from 'path';
import { v1Router } from './routes/v1';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/v1', v1Router)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-playground!' });
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
