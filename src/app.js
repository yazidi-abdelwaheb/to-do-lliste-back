import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import setupMongoServer from './config/data-base.js';
import path from 'path';
import tasksRouter from './modules/tasks/tasks.router.js';
import usersRouter from './modules/users/users.router.js';
import { fileURLToPath } from 'url';
import featuresRouter from './modules/features/features.router.js';
const app = express();
const server = http.createServer(app);

// Connecting mongoDB
(async () => {
  await setupMongoServer();
})()


// Setting up static directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/api/public', express.static(path.join(__dirname, 'public')));
app.use('/api/private', express.static(path.join(__dirname, 'private')));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ****** APIs ******* //

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);
app.use('/api/features', featuresRouter);



app.get('/api/version', (req, res) => res.status(200).json({
  version: process.env.VERSION,
  dateDeploy: process.env.DATE_DEPLOY,
}));
// Index Route
app.get('/', (req, res) => {
  res.status(404).json({ message: '404 not found' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: '404 not found' });
});

app.use((req, res) => {
  res.status(404).json({ message: '404 not found' });
});



export {server};