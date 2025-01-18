import { RouteObject } from 'react-router-dom'
import { HomePage } from '@/pages/home/HomePage'
import { TaskList } from '@/widgets/task-list/ui/TaskList'
import { LoginPage } from '@/pages/login/LoginPage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { EditTaskPage } from '@/pages/edit-task/EditTaskPage'

export enum AppRouters {
  MAIN = 'main',
  LOGIN = 'login',
  NOT_FOUND = 'not_found',
  TASKS = 'tasks',
  TASK = 'task',
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.LOGIN]: '/login',
  [AppRouters.NOT_FOUND]: '*',
  [AppRouters.TASKS]: '/tasks',
  [AppRouters.TASK]: '/tasks/:id',
}

interface RouteItem extends Omit<RouteObject, 'children'> {
  auth?: boolean
}

export const routerConfig: Record<AppRouters, RouteItem> = {
  [AppRouters.MAIN]: {
    path: RouterPath[AppRouters.MAIN],
    element: <HomePage />,
    auth: true,
  },
  [AppRouters.LOGIN]: {
    path: RouterPath[AppRouters.LOGIN],
    element: <LoginPage />,
    auth: false,
  },
  [AppRouters.TASKS]: {
    path: RouterPath[AppRouters.TASKS],
    element: <TaskList />,
    auth: true,
  },
  [AppRouters.TASK]: {
    path: RouterPath[AppRouters.TASK],
    element: <EditTaskPage />,
    auth: true,
  },
  [AppRouters.NOT_FOUND]: {
    path: RouterPath[AppRouters.NOT_FOUND],
    element: <NotFoundPage />,
    auth: false,
  },
}
