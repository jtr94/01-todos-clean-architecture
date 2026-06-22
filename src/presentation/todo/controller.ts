import { json } from "body-parser"
import { Request, Response } from "express"

export class TodoController{
    constructor(){}

    public getTodos = async (req:Request, res:Response) => {
        res.send('Hello');
    }
    
}