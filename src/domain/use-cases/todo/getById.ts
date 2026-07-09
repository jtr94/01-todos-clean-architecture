import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface GetByIdUseCase {
    execute(id:number): Promise<Todo>;
}

export class GetTodo implements GetByIdUseCase {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (id:number): Promise<Todo> {
        return this.repository.getById(id);
    }
}