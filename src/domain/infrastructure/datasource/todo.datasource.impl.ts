import { prisma } from "../../../data/postgres.ts";
import { TodoDataSource } from "../../datasources/todo.datasource.ts";
import { CreateTodoDTO } from "../../dtos/todos/create.todo.ts";
import { UpdateTodoDto } from "../../dtos/todos/updateTodoDto.ts";
import { Todo } from "../../entities/todo.entity.ts";

export class TodoDatasourceImpl implements TodoDataSource {
  async create(createTodoDto: CreateTodoDTO): Promise<Todo> {
    const todo = await prisma.todos.create({ data: createTodoDto! });
    return Todo.fromObj(todo);
  }
  async getAll(id: number): Promise<Todo[]> {
    const todo = await prisma.todos.findMany({ where: { id: id } });
    return todo.map((todo) => Todo.fromObj(todo));
  }
  async getById(id: number): Promise<Todo> {
    const todo = await prisma.todos.findFirst({ where: { id: id } });
    if (!todo) throw `Todo with ${id} not found`;
    return Todo.fromObj(todo);
  }
  async updateById(updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await prisma.todos.findFirst({ where: { id: updateTodoDto.id } });
    const updatedTodo = await prisma.todos.update({
      where: { id: updateTodoDto.id },
      data: updateTodoDto,
    });
    return Todo.fromObj(updatedTodo);
  }
  async deleteById(id: number): Promise<Todo> {
    await prisma.todos.findFirst({ where: { id:id } });
    const deletedTodo = await prisma.todos.delete({ where: { id: id } });
    return Todo.fromObj(deletedTodo);
  }
}
