import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface DeleteTodo {
    execute(id:number): Promise<Todo>;
}

export class DeleteUseCase implements DeleteTodo {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (id:number): Promise<Todo> {
        return this.repository.deleteById(id);
    }
}