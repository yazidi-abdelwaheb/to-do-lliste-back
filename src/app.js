import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROTOCOL_FRONT, URL_FRONT, VERSION } from './config/env.config.js';

import tasksRouter from './modules/tasks/tasks.router.js';
import usersRouter from './modules/users/users.router.js';
import featuresRouter from './modules/features/features.router.js';
import groupsRouter from './modules/groups/group.router.js';




const app = express();
const server = http.createServer(app);


// Setting up static directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/api/public', express.static(path.join(__dirname, 'public')));
app.use('/api/private', express.static(path.join(__dirname, 'private')));

app.use(cors({
  methods : ['GET','POST','PUT','DELETE','PATCH'],
  origin : [`${PROTOCOL_FRONT}://${URL_FRONT}`],
  allowedHeaders: ["Content-Type", "Authorization"],
  
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ****** APIs ******* //

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);
app.use('/api/features', featuresRouter);
app.use('/api/groups', groupsRouter);



app.get('/api/version', (req, res) => res.status(200).json({
  version: VERSION,
  description:"REST FULL API TODO LIST - Task mange.",
}));


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