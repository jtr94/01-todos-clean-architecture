import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface GetTodo {
    execute(id:number): Promise<Todo>;
}

export class GetByIdUseCase implements GetTodo {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (id:number): Promise<Todo> {
        return this.repository.getById(id);
    }
}