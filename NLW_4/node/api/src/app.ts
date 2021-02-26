import "reflect-metadata"
import express, { request, response } from 'express';
import createConnection from "./database"
import { router } from "./routers";

createConnection();
const app = express();

app.use(express.json());

app.use(router);

export { app }