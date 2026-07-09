import { CreateTodoDTO } from "../../dtos/todos/create.todo.ts";
import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface CreateUseCase {
    execute(todo :CreateTodoDTO): Promise<Todo>;
}

export class CreateTodo implements CreateUseCase {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (todo :CreateTodoDTO): Promise<Todo> {
        return this.repository.create(todo);
    }
}