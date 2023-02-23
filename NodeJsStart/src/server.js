import express from 'express';
import { json, urlencoded } from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();

let app = express();

//config app

app.use(json());
app.use(urlencoded({ extended: true }));

viewEngine(app);

initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
