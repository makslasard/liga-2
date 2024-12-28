import { RouteProps } from 'react-router-dom'
import { TaskList } from '../../../features/task/task-list/ui/task-list'
import { HomePage } from '@/pages/home/HomePage'

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
