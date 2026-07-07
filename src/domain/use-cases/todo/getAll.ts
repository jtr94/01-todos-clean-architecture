import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface GetTodos {
    execute(): Promise<Todo[]>;
}

export class GetAllUseCase implements GetTodos {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (): Promise<Todo[]> {
        return this.repository.getAll();
    }
}