import { CreateTodoDTO } from "../dtos/todos/create.todo.ts";
import { UpdateTodoDto } from "../dtos/todos/updateTodoDto.ts";
import { Todo } from "../entities/todo.entity.ts";


export abstract class TodoRepository{
    abstract create(createTodoDto: CreateTodoDTO): Promise <Todo>;
    abstract getAll(id: number) : Promise <Todo[]>;
    abstract getById(id: number) : Promise <Todo>;
    abstract updateById(updateTodoDto: UpdateTodoDto) : Promise <Todo>;
    abstract deleteById(id: number) : Promise <Todo>;
}