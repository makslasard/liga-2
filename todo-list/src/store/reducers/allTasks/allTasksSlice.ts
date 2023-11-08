import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../../types/Task/Task.types';
import { IAllTaskState } from './allTasksSlice.types';

const initialState: IAllTaskState = {
  filteredTasks: [],
  currentTaskById: {
    id: 4,
    title: 'Задача 4',
    description: 'Описание задачи 4',
    isCompleted: false,
    isImportant: false,
  },
  allTasks: [
    {
      id: 1,
      title: 'Задача 1',
      description:
        "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:",
      isCompleted: false,
      isImportant: false,
    },
    {
      id: 2,
      title: 'Задача 2',
      description:
        "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:",
      isCompleted: false,
      isImportant: true,
    },
    { id: 3, title: 'Задача 3', description: 'Описание задачи 3', isCompleted: false, isImportant: false },
    { id: 4, title: 'Задача 4', description: 'Описание задачи 3', isCompleted: false, isImportant: false },
    { id: 5, title: 'Задача 5', description: 'Описание задачи 3', isCompleted: false, isImportant: false },
  ],
};

export const allTasksSlice = createSlice({
  name: 'allTasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.filteredTasks.unshift(action.payload);
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const taskIndex = state.filteredTasks.findIndex((item) => item.id === action.payload);
      if (taskIndex !== -1) {
        state.filteredTasks.splice(taskIndex, 1);
      }
      return state;
    },

    updateTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.filteredTasks.findIndex((item) => item.id === action.payload.id);
      if (taskIndex !== -1) {
        const updatedTask = action.payload;
        state.filteredTasks.splice(taskIndex, 1);

        if (updatedTask.isCompleted) {
          state.filteredTasks.push(updatedTask);
        } else {
          state.filteredTasks.unshift(updatedTask);
        }
      }
      return state;
    },

    taskById: (state, action: PayloadAction<number>) => {
      const taskIndex = state.filteredTasks.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        state.currentTaskById = state.filteredTasks[taskIndex];
      }
      return state;
    },

    updateFilteredTasks: (state, action: PayloadAction<{ filter: string; searchQuery: string }>) => {
      const { filter, searchQuery } = action.payload;
      const searchQueryLowerCase = searchQuery.toLowerCase();

      state.filteredTasks = state.allTasks.filter((task) => {
        const taskTitleLowerCase = task.title.toLowerCase();

        let isTaskVisible = true;

        switch (filter) {
          case 'All':
            break;
          case 'Active':
            isTaskVisible = !task.isCompleted;
            break;
          case 'Done':
            isTaskVisible = task.isCompleted;
            break;
          case 'Important':
            isTaskVisible = task.isImportant;
            break;
          default:
            isTaskVisible = false;
        }

        if (searchQuery) {
          isTaskVisible = isTaskVisible && taskTitleLowerCase.includes(searchQueryLowerCase);
        }

        return isTaskVisible;
      });
    },
  },
});
export const { reducer: allTasksReducer, actions: allTasksActions } = allTasksSlice;
