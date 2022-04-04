import './styles.css';
import{Todo, Todolist } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new Todolist();

todoList.todos.forEach(todo => crearTodoHtml(todo));