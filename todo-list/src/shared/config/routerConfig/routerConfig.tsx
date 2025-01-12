import { RouteProps } from 'react-router-dom'
import { HomePage } from '@/pages/home/HomePage'
import { TaskList } from '@/widgets/task-list/ui/TaskList'

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
}

export const routerConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath.main,
    element: <HomePage />,
  },
  [AppRouters.ABOUT]: {
    path: RouterPath.about,
    element: <TaskList />,
  },
}
