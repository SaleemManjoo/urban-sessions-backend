import express from 'express';
import Routes from '../classes/routes';

export default class HealthCheck extends Routes {
    protected initRoutes() {
        this.router.route(this.baseUri).get((req, res) => this.doHealthCheck(req, res));
    }

    public doHealthCheck(req: express.Request, res:express.Response) {
        const response = this.createSuccessfulResponse("All good, captain!");

        res.json(response);
    }
}