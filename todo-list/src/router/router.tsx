import { HomePage } from 'pages/HomePage/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { TaskPage } from 'pages/TaskPage/TaskPage';
import { TaskList } from 'modules/TaskList/TaskList';

export enum RoutersNames {
  HOME = '/',
  NOT_FOUND = '*',
  TASK_LIST = '/tasks',
  TASK = '/tasks/:id',
}

export const publicRoutes = [
  { path: RoutersNames.HOME, component: <HomePage /> },
  { path: RoutersNames.NOT_FOUND, component: <NotFoundPage /> },
  { path: RoutersNames.TASK_LIST, component: <TaskList /> },
  { path: RoutersNames.TASK, component: <TaskPage /> },
];
