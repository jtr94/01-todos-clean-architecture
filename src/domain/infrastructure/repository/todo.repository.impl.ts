import { TodoDataSource } from "../../datasources/todo.datasource.ts";
import { CreateTodoDTO } from "../../dtos/todos/create.todo.ts";
import { UpdateTodoDto } from "../../dtos/todos/updateTodoDto.ts";
import { TodoRepository } from "../../repositories/todo.repository.ts";

export class TodoRepositoryImpl implements TodoRepository {

  constructor(
    public readonly datasource: TodoDataSource,
  ){}

  async create(createTodoDto: CreateTodoDTO): Promise<any> {
    return this.datasource.create(createTodoDto);
  }

  async getAll(): Promise<any> {
    return this.datasource.getAll();
  }

  async getById(id: number): Promise<any> {
    return this.datasource.getById(id);
  }

  async updateById(updateTodoDto: UpdateTodoDto): Promise<any> {
    return this.datasource.updateById(updateTodoDto);
  }

  async deleteById(id: number): Promise<any> {
    return this.datasource.deleteById(id);
  }
}

