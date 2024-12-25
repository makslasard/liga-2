import { HomePage } from '@/pages/home/HomePage';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';
import { TaskList } from '@/features/task/task-list';
import { EditTaskPage } from '@/pages/edit-task/EditTaskPage';


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
  { path: RoutersNames.TASK, component: <EditTaskPage /> },
];
