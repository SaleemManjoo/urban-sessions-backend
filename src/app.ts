import express from 'express';
import RouterService from './router-service';
import cors from 'cors';
import { Config } from './config';
import bodyParser from 'body-parser';

//initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

//setup routes
const routerService: RouterService = new RouterService();
routerService.setupRoutes(app);

//start listening
app.listen(Config.apiSettings.port, () => {
    console.log('listening on port: ', Config.apiSettings.port)
});