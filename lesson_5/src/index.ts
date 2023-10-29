import ServiceFetchTasks from './services/ServiceFetchTasks.js';
import TaskController from './controllers/TaskController.js';
// import ServiceXMLTasks from './services/ServiceXMLTasks.js';

const currentService = new ServiceFetchTasks('http://37.220.80.108/tasks');
const taskController = new TaskController(currentService);

// Получение всех задач
const allTasks = taskController.getAllTasks();

// Отображение всех задач в консоли
console.log('All tasks:', allTasks);

// Получение задачи по идентификатору
const taskById = taskController.getTaskById(2);

// Отображение задачи в консоли
console.log('Task by ID:', taskById);

// Удаление задачи по идентификатору
const deleteTaskById = taskController.deleteTaskById(1);
console.log('Delete task by ID:', deleteTaskById);

// Добавление новой задачи
const newTask = {
  id: 1,
  info: 'Это новая задача',
  isCompleted: true,
  isImportant: false,
  name: 'Новая задача',
};
const addNewTask = taskController.addTask(newTask);
console.log('Add new task:', addNewTask);

// Обновление задачи
const updatedTask = {
  id: 1,
  info: 'Обновленная задача',
  isCompleted: true,
  isImportant: false,
  name: 'Это обновленная задача',
};
const updateTaskById = taskController.updateTaskById(3, updatedTask);
console.log('Update task by ID:', updateTaskById);
