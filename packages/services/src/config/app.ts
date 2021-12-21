import cors from 'cors';
import express from 'express';
import http from 'http';

const app = express();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

export {app, server};
