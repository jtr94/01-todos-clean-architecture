import express from 'express';
import { json } from 'body-parser';
import { AppRoutes } from './routes.ts';

interface Options {
    port : number,
    public_path?: string,
}

export class Server{
    private app = express();
    private readonly port; 
    private readonly public_path;
    
    constructor(options:Options){
        const {port, public_path='public'} = options;
        this.port = port;
        this.public_path = public_path;
    }

    public start(){
        this.app.use(json());
        this.app.use(AppRoutes.routes);
        this.app.listen(this.port);
        console.log(`Server running on port ${this.port}`);
    }
}