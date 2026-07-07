import { UpdateTodoDto } from "../../dtos/todos/updateTodoDto.ts";
import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface UpdateTodo {
    execute(todo :UpdateTodoDto): Promise<Todo>;
}

export class UpdateUseCase implements UpdateTodo {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (todo :UpdateTodoDto): Promise<Todo> {
        return this.repository.updateById(todo);
    }
}