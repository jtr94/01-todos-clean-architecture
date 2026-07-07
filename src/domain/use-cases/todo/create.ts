import { CreateTodoDTO } from "../../dtos/todos/create.todo.ts";
import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface CreateTodo {
    execute(todo :CreateTodoDTO): Promise<Todo>;
}

export class CreateUseCase implements CreateTodo {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (todo :CreateTodoDTO): Promise<Todo> {
        return this.repository.create(todo);
    }
}