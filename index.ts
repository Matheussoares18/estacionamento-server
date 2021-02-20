import 'reflect-metadata';
const dotenv = require('dotenv');
import bodyParser from 'body-parser';
dotenv.config({
    path: './.env',
});
import express = require('express');
import cors from 'cors';

import http from 'http';
import userRoute from './src/routes/userRoute'
const homedir = require('os').homedir();

const PORT = process.env.PORT || 5001;
const app = express();

const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000/'],
    })
);
const knex = Knex({
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
        database: 'estacionamento',
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
    },
});

Model.knex(knex);

app.use(
    express.json({
        limit: '15kb',
    })
);
app.use('/static', express.static(homedir + '/estacionamento-images'));

app.use(userRoute);

const expressServer = http.createServer(app);

expressServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));