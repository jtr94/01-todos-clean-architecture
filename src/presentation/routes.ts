import { Router } from "express";
import { TodoRoutes } from "./todo/routes.ts";
import { request } from "node:http";

export class AppRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        // router.use((req, res)=>{
        //  console.log(`base url: ${req.originalUrl} `)    
        // });

        router.use('/api/todos/', TodoRoutes.routes);
        
        return router;       
    }
}