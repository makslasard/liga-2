import { IEditTask } from '../../edit-task/types/types';

export const createNewTask = ({
  taskId,
  infoTask,
  nameTask,
  completedStatus,
  editStatus,
  importantStatus,
}: IEditTask) => {
  const newTask: IEditTask = {
    taskId: taskId,
    nameTask: nameTask,
    infoTask: infoTask,
    completedStatus: completedStatus,
    importantStatus: importantStatus,
    editStatus: editStatus,
  };

  return newTask;
};
