import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Constants, MethodApi } from '@/shared/api/constants/constant'
import { ITask } from '@/shared/types/task/task'

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: Constants.BASE_URL }),
  endpoints: (builder) => ({
    createNewTask: builder.query({
      query: (newTask: ITask) => ({
        url: '/tasks',
        method: MethodApi.POST,
        body: newTask,
      }),
    }),
    editCurrentTask: builder.query({
      query: (editedTask: ITask) => ({
        url: `/tasks/${editedTask.id}`,
        method: MethodApi.PUT,
        body: editedTask,
      }),
    }),
  }),
})
