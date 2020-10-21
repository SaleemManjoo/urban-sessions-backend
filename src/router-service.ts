import HealthCheck from './routes/health-check';
import express from 'express';
import { Config } from './config';

export default class RouterService {
    public setupRoutes(app: express.Application) {
        const healthCheck: HealthCheck = new HealthCheck("/hc");

        app.use(Config.apiSettings.baseUri, healthCheck.getRouter());
    }
}