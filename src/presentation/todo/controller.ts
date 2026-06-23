import { json } from "body-parser"
import { Request, Response } from "express"

export class TodoController{
    constructor(){}
    
    public getTodos = async (req:Request, res:Response) => {
        res.json('Hello');
    }

    public getTodoById = async (req:Request, res:Response) => {
        res.json('Hello');
    }

    public createTodo = async (req:Request, res:Response) => {
        res.json('Hello');
    }
    public updateTodo = async (req:Request, res:Response) => {
        res.json('Hello');
    }
    public deleteTodo = async (req:Request, res:Response) => {
        res.json('Hello');
    }
    
}