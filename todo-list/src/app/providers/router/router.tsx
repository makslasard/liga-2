import { HomePage } from '@/pages/home/HomePage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { EditTaskPage } from '@/pages/edit-task/EditTaskPage'
import { TaskList } from '@/widgets/task-list/ui/TaskList' // Это не страница. Должен входить в HomePage

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
]
