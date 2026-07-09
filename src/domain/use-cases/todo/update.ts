import { UpdateTodoDto } from "../../dtos/todos/updateTodoDto.ts";
import { Todo } from "../../entities/todo.entity.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";


interface UpdateUseCase {
    execute(todo :UpdateTodoDto): Promise<Todo>;
}

export class UpdateTodo implements UpdateUseCase {
    constructor(
        readonly repository: TodoRepository,
    ){}

    execute (todo :UpdateTodoDto): Promise<Todo> {
        return this.repository.updateById(todo);
    }
}