import { json } from "body-parser"
import { Request, Response } from "express"
import { TodoRepository } from "../../domain/index.ts";

export class TodoController{
    constructor(
        public repository : TodoRepository,
    ){}


    
    public getTodos = async (req:Request, res:Response) => {
        const todos = await this.repository.getAll();
        res.json(todos);
    }

    public getTodoById = async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const todo = await this.repository.getById(id);
        res.json(todo);
    }

    public createTodo = async (req:Request, res:Response) => {
        const body = await req.body;
        const newTodo = await this.repository.create(body);
        res.json(newTodo);
    }
    public updateTodo = async (req:Request, res:Response) => {
        res.json('Hello');
    }
    public deleteTodo = async (req:Request, res:Response) => {
        res.json('Hello');
    }
    
}