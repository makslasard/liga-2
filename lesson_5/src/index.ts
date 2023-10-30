import ServiceFetchTasks from './services/ServiceFetchTasks.js';
import TaskController from './controllers/TaskController.js';
// import ServiceXMLTasks from './services/ServiceXMLTasks.js';

const currentService = new ServiceFetchTasks('http://37.220.80.108/tasks');
const taskController = new TaskController(currentService);

// Получение всех задач
taskController.getAllTasks();

// Получение задачи по идентификатору
taskController.getTaskById(46);

// Удаление задачи по идентификатору
taskController.deleteTaskById(1);

// Добавление новой задачи
const newTask = {
  id: 1,
  info: 'Это новая задача',
  isCompleted: true,
  isImportant: false,
  name: 'Новая задача',
};
taskController.addTask(newTask);

// Обновление задачи
const updatedTask = {
  id: 22,
  info: 'Обновленная задача',
  isCompleted: true,
  isImportant: false,
  name: 'Это обновленная задача',
};
taskController.updateTaskById(22, updatedTask);
