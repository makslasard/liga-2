import { createSelector } from '@reduxjs/toolkit';
import { IEditTaskState } from './types';
import { RootState } from 'app/store/store';

const selectEditTaskState = (state: RootState): IEditTaskState => state.currentTaskById;

export const selectorCurrentTaskById = createSelector(
  selectEditTaskState,
  (state: IEditTaskState) => state.currentTaskById
);
