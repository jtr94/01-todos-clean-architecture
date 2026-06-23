import {Router} from "express";
import { TodoController } from "./controller.ts";
import { TodoRepositoryImpl } from "../../domain/infrastructure/repository/todo.repository.impl.ts";
import { TodoDatasourceImpl } from "../../domain/infrastructure/datasource/todo.datasource.impl.ts";

export class TodoRoutes{

    static get routes(): Router {
        const router = Router();  

        const todoDatasource = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositoryImpl(todoDatasource);

        const todoController = new TodoController(todoRepository);

        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);

        return router;  
    }
    
}