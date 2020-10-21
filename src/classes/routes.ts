import express from 'express';
import IResponseSuccess from '../interfaces/http/i-response-success';
import IResponseError from '../interfaces/http/i-response-error';

export default class Routes {

    protected router: express.Router = express.Router();
    protected baseUri: string;

    constructor (baseUri: string) {
        this.baseUri = baseUri;

        this.initRoutes();
    }

    protected initRoutes() {
        throw new Error('Not Implemented');
    }

    public getRouter(): express.Router {
        return this.router;
    }

    protected createSuccessfulResponse(data: any): IResponseSuccess {
        return {
            code: 200,
            data: data,
        }
    }

    protected createErrorResponse(code: number, error: any): IResponseError {
        return {
            code: code,
            error: error,
        }
    }
}