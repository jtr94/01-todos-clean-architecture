import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface DeleteUseCase {
    execute(id:number): Promise<Todo>;
}

export class DeleteTodo implements DeleteUseCase {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (id:number): Promise<Todo> {
        return this.repository.deleteById(id);
    }
}