import { Router } from "express";
import { TodoRoutes } from "./todo/routes.ts";

export class AppRoutes{
    constructor(){}

    static routes():Router{
        const router = Router();

        router.use('/api/todos', TodoRoutes.routes);
        return router;       
    }
}