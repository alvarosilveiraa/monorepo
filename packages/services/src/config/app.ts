import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

export {app, server};
