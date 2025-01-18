import { FC } from 'react'

import { HomePage } from '@/pages/home/HomePage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { EditTaskPage } from '@/pages/edit-task/EditTaskPage'
import { TaskList } from '@/widgets/task-list/ui/TaskList'
import { LoginPage } from '@/pages/login/LoginPage'

export enum RoutersNames {
  HOME = '/',
  NOT_FOUND = '*',
  LOGIN = '/login',
  TASK_LIST = '/tasks',
  TASK_BY_ID = '/tasks/:id',
}

export interface RouteType {
  path: string
  component: FC
  auth?: boolean
}

export const publicRoutes: RouteType[] = [
  {
    path: RoutersNames.LOGIN,
    component: LoginPage,
    auth: false,
  },
  {
    path: RoutersNames.NOT_FOUND,
    component: NotFoundPage,
    auth: false,
  },
]

export const privateRoutes: RouteType[] = [
  {
    path: RoutersNames.HOME,
    component: HomePage,
    auth: true,
  },
  {
    path: RoutersNames.TASK_LIST,
    component: TaskList,
    auth: true,
  },
  {
    path: RoutersNames.TASK_BY_ID,
    component: EditTaskPage,
    auth: true,
  },
]
