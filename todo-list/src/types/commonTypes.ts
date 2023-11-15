import { paths } from './api';

export type ChangeMeType = any;

export type GetAllTaskType = paths['/tasks']['get']['responses']['200']['content']['application/json'];
export type PostNewTaskType = paths['/tasks']['post']['responses']['200']['content']['application/json'];
export type GetTaskByIdType = paths['/tasks/{taskId}']['get']['responses']['200']['content']['application/json'];
export type UpdateTaskByIdType = paths['/tasks/{taskId}']['patch']['responses']['200']['content']['application/json'];
export type DeleteTaskByIdType =
  paths['/tasks/{taskId}']['delete']['responses']['200']['content']['application/json; charset=utf-8'];
