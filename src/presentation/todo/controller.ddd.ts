import { json } from "body-parser"
import { Request, Response } from "express"
import { CreateTodoDTO, TodoRepository, UpdateTodoDto } from "../../domain/index.ts";

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
        const [error, createTodoDto] = CreateTodoDTO.create(req.body);
        if(error) return res.status(400).json(error);

        const newTodo = await this.repository.create( createTodoDto! );
        res.json(newTodo);
    }

    public updateTodo = async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if(error) return res.status(400).json(error);
        
        const updTodo = await this.repository.updateById(updateTodoDto!);
        res.json(updTodo);
    }

    public deleteTodo = async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const delTodo = await this.repository.deleteById(id);
        res.json(delTodo);
    }
    
}