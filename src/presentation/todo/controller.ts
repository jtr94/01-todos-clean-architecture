import { json } from "body-parser"
import { Request, Response } from "express"
import { CreateTodo, CreateTodoDTO, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo, UpdateTodoDto } from "../../domain/index.ts";

export class TodoController{
    constructor(
        public repository : TodoRepository,
    ){}
    
    public getTodos =  (req:Request, res:Response) => {
        new GetTodos(this.repository)
            .execute ()
            .then(todos => res.json(todos))
            .catch(error => res.status(400).json({error}));
    }

    public getTodoById = async (req:Request, res:Response) => {
        const id = Number(req.params.id);

        new GetTodo(this.repository)
            .execute(id)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({error}));
    }

    public createTodo = async (req:Request, res:Response) => {
        const [error, createTodoDto] = CreateTodoDTO.create(req.body);
        if(error) return res.status(400).json(error);

        new CreateTodo(this.repository)
            .execute(createTodoDto!)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({error}));
    }

    public updateTodo = async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if(error) return res.status(400).json(error);
        
        new UpdateTodo(this.repository)
            .execute(updateTodoDto!)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({error}));
    }

    public deleteTodo = async (req:Request, res:Response) => {
        const id = Number(req.params.id);

        new DeleteTodo(this.repository)
            .execute(id)
            .then(todo => res.json(todo))
            .catch(error => res.status(400).json({error}));
    }
    
}