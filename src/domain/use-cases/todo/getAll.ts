import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface GetAllUseCase {
    execute(): Promise<Todo[]>;
}

export class GetTodos implements GetAllUseCase {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (): Promise<Todo[]> {
        return this.repository.getAll();
    }
}